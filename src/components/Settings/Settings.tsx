

import { SettingsType } from "../../core/Models/Template/Settings/Types/SettingsType";
import { TypeFormField } from "./TypesFormFields/TypeFormField";
import styles from "./Settings.module.scss";
import { TypesFormFieldsGroup } from "./TypesFormFieldsGroups/TypesFormFieldsGroup";
import { GroupSettingsType } from "../../core/Models/Template/Settings/Types/GroupSettingsType";
import { FieldSettingsType } from "../../core/Models/Template/Settings/Types/FieldSettingsType";
import { useAppSelector } from "../../app/hooks";
import { TemplateInterface } from "../../core/Models/Template/TemplateInterface";


function Settings(props: { editor: string, currentTemplate:TemplateInterface }) {
  const { editor, currentTemplate} = props;
  
  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>{currentTemplate.name} settings</h2>
      <form>
        {currentTemplate.settings.map((setting) => {
          if (!setting.type || !(setting.type instanceof SettingsType)) {
            return null;
          } else {
            if (
              setting.type &&
              setting.type instanceof GroupSettingsType &&
              setting.childSettings
            ) {
              return (
                <TypesFormFieldsGroup
                  editor={props.editor}
                  id={setting.id}
                  name={setting.name}
                  groupHandle={setting.type.getFormGroupHandle()}
                  childSettings={ setting.childSettings}
                >
                </TypesFormFieldsGroup>
              );
            } else if (
              setting.type &&
              setting.type instanceof FieldSettingsType 
            ) {
              return (
                <TypeFormField
                  editor={props.editor}
                  id={setting.id}
                  name={setting.name}
                  fieldHandle={setting.type.getFormFieldHandle()}
                  value={setting.value}
                />
              );
            }
          }
        })}
        <button className={styles.button} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;