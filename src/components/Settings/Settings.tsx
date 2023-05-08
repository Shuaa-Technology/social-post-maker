import React, { useState } from "react";
import styles from "./Settings.module.scss";
import {useSelector} from "react-redux";
import {getTemplatesStore} from "../../app/store/TemplatesStore";
import {SettingsType} from "../../core/Models/Template/Settings/Types/SettingsType";


function FormField({ setting }: any) {
    const formField = setting.type && setting.type  instanceof SettingsType  ? setting.type.getFormField(setting.value) : <></>;

    return (
        <div className={styles.field} key={setting.id}>
            <label htmlFor={setting.id}>{setting.name}:</label>
            <div>{formField}</div>
        </div>
    );
}

function Settings() {

    const { currentTemplate } = useSelector(getTemplatesStore);
    
    return (
        <div className={styles.container}>
            <form>
                {currentTemplate.settings.map((setting) => (
                    <FormField key={setting.id} setting={setting} />
                ))}
                <button className={styles.button} type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Settings;
