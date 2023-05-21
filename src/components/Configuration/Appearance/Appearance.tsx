import React from 'react';
import {getCurrentThemeMode, getThemeModes, setThemeMode} from "../../../app/store/ConfigStore";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import styles from './Appearance.module.scss';
import ThemeModeInput from "../Inputs/ThemeModeInput/ThemeMode";

const AppearanceSettings = () => {
    const dispatch = useAppDispatch();
    const currentThemeMode  = useAppSelector(getCurrentThemeMode);
    const themeModes = useAppSelector(getThemeModes);


    const handleModeChange = (handle: string) => {
        const selectedTheme = themeModes.find(theme => theme.handle === handle);
        if (selectedTheme) {
            dispatch(setThemeMode(selectedTheme));
        }
    };

    return (
        <div>
            <div className={styles.sectionTitle}>Appearance</div>
            <div className={styles.container}>
                {themeModes.map(themeMode => (
                    <ThemeModeInput
                        key={themeMode.handle}
                        thumbnail={themeMode.thumbnail}
                        handle={themeMode.handle}
                        name={themeMode.name}
                        checked={currentThemeMode.handle === themeMode.handle}
                        onChange={handleModeChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppearanceSettings;
