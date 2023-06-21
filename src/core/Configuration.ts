import { ThemeModeInterface } from "./Models/Configuration/Appearance/ThemeModeInterface";
import ThemeMode from "./Models/Configuration/Appearance/ThemeMode";

export class Configuration {
  themeModes: ThemeModeInterface[];

  constructor() {
    this.themeModes = this.getThemeModes();
  }


  /**
   * Get all themes.
   *
   * @return {*}  {ThemeModeInterface[]}
   * @memberof Configuration
   */
  getThemeModes(): ThemeModeInterface[] {
    return [
      new ThemeMode('light', 'Light Theme', require('../styles/themes/light/thumbnail.svg').default),
      new ThemeMode('dark', 'Dark Theme', require('../styles/themes/dark/thumbnail.svg').default
      )
    ];
  }


  /**
   * Get theme by handle
   *
   * @param {string} handle
   * @return {*}  {ThemeModeInterface}
   * @memberof Configuration
   */
  getThemeModeByHandle(handle: string): ThemeModeInterface {
    const themeMode = this.themeModes.find(themeMode => themeMode.handle === handle);
    if (themeMode) {
      return themeMode;
    }
    // Throw an error or handle the case when the theme mode is not found
    throw new Error(`Theme mode with handle '${handle}' not found.`);
  }


  /**
   *
   *
   * @return {*}  {ThemeModeInterface}
   * @memberof Configuration
   */
  getDefaultThemeMode(): ThemeModeInterface {
    return this.getThemeModeByHandle('light');
    
  }
}
