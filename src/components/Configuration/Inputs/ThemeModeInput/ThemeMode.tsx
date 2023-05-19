import React from 'react';
import styles from './ThemeMode.module.scss'

interface ThemeModeProps {
    handle: string;
    name: string;
    thumbnail: any;
    checked: boolean;
    onChange: (handle: string) => void;
}


export function ThemeModeInput({ handle, thumbnail, name, checked, onChange }: ThemeModeProps) {

    const handleInputChange = () => {
        onChange(handle);
    };

    return (
        <div  className={`${styles.themeModeInput} ${checked ? styles.active : ''}`}>
            <label htmlFor={handle}>
                <div className={styles.themeModeInputHeader}>
                    <img src={ thumbnail } alt={handle} className={styles.themeThumbnail} />
                </div>
                <div className={styles.themeModeInputBody}>
                    <input
                        id={handle}
                        type="radio"
                        value={handle}
                        checked={checked}
                        onChange={handleInputChange}
                    />
                    {name}
                </div>
            </label>
        </div>

    );
}

export default ThemeModeInput;
