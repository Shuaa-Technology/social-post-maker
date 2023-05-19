import React from 'react';
import {setThemeMode} from "../../../app/store/AppearanceStore";
import {RootState} from "../../../app/store";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import styles from './Appearance.module.scss';


const AppearanceSettings = () => {
    const dispatch = useAppDispatch();
    const appearanceMode = useAppSelector((state: RootState) => state.appearance.themeMode);


    const handleModeChange = (event: { target: { value: any; }; }) => {
        const mode = event.target.value;
        dispatch(setThemeMode(mode));
    };

    return (
        /*todo: improve ui*/
        <div>
            <div className={styles.sectionTitle}>Appearance</div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="light"
                        checked={appearanceMode === 'light'}
                        onChange={handleModeChange}
                    />
                    Light Mode
                </label>
                <label>
                    <input
                        type="radio"
                        value="dark"
                        checked={appearanceMode === 'dark'}
                        onChange={handleModeChange}
                    />
                    Dark Mode
                </label>
            </div>
        </div>
    );
};

export default AppearanceSettings;
