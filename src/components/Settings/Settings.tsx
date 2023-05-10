import React from "react";
import { useSelector } from "react-redux";
import { getTemplatesStore } from "../../app/store/TemplatesStore";
import { SettingsType } from "../../core/Models/Template/Settings/Types/SettingsType";
import { TypeFormField } from "./TypesFormFields/TypeFormField";
import styles from "./Settings.module.scss";


function Settings() {
  const { currentTemplate } = useSelector(getTemplatesStore);

  return (
    <div className={styles.container}>
      <form>
        {currentTemplate.settings.map((setting) => {
          if (!setting.type || !(setting.type instanceof SettingsType)) {
            return null;
          }

          return (
            <TypeFormField
              id={setting.id}
              name={setting.name}
              fieldHandle={setting.type.getFormFieldHandle()}
              value={setting.value}
            />
          );
        })}
        <button className={styles.button} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;
