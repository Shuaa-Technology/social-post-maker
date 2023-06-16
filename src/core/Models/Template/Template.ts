import { TemplateSettingsInterface } from "./Settings/TemplateSettingsInterface";
import { TemplateInterface } from "./TemplateInterface";

export class Template implements TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  render: string;
  settings: TemplateSettingsInterface[] = [];

  public getRender(): string {
    return this.render;
  }

  public getSettings(): TemplateSettingsInterface[] {
    return this.settings;
  }

  public setSettings(settings: TemplateSettingsInterface[]): TemplateInterface {
    this.settings = settings;
    return this;
  }

  public static findById(
    data: any,
    key: any
  )  {
    function iter(a: any) {
      if (a.key === key) {
        result = a;
        return true;
      }
      return Array.isArray(a.childSettings) && a.childSettings.some(iter);
    }

    var result: any;
    data.some(iter);
    return result;
  }

 
  public static getSettingsByKey(
    template: TemplateInterface,
    key: string
  ): any {
    return this.findById(template.settings, key);
  }


  public static updateSettingsByKey(
    template: TemplateInterface,
    key: string,
    value: string
  ): TemplateInterface {
    let newSettings: TemplateSettingsInterface[] = [];
    template.settings.forEach((element) => {
      if (
        element.childSettings != undefined &&
        Array.isArray(element.childSettings)
      ) {
        let newChilds: TemplateSettingsInterface[] = [];
        console.log(element.childSettings);
        element.childSettings.forEach((elChild) => {
          if (elChild.key == key) {
            elChild.value = value;
          }
          newChilds.push(elChild);
        });
        element.childSettings = newChilds;
      }
      newSettings.push(
        element.key == key ? { ...element, value: value } : element
      );
    });

    template.settings = newSettings;
    template.version = (Number(template.version) + 1).toString();
    return template;
  }
}
