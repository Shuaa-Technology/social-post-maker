import React from 'react';
import {setThemeMode} from "../../../app/store/AppearanceStore";
import {RootState} from "../../../app/store";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import styles from './Appearance.module.scss';
import ThemeModeInput from "../Inputs/ThemeModeInput/ThemeMode";

// TODO: find a way to make this dynamic
import dark from '../../../styles/themes/dark/thumbnail.svg';
import light from '../../../styles/themes/light/thumbnail.svg';


const AppearanceSettings = () => {
    const dispatch = useAppDispatch();
    const currentThemeMode  = useAppSelector((state: RootState) => state.appearance.currentThemeMode);
    const themeModes = useAppSelector((state: RootState) => state.appearance.themeModes);


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
                {themeModes.map(theme => (
                    <ThemeModeInput
                        key={theme.handle}
                        /*TODO clean this*/
                        thumbnail={theme.handle == 'dark' ? dark : light}
                        handle={theme.handle}
                        name={theme.name}
                        checked={currentThemeMode.handle === theme.handle}
                        onChange={handleModeChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppearanceSettings;
