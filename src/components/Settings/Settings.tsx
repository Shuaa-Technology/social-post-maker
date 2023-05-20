import { useSelector } from "react-redux";
import { getTemplatesStore } from "../../app/store/TemplatesStore";
import { SettingsType } from "../../core/Models/Template/Settings/Types/SettingsType";
import { TypeFormField } from "./TypesFormFields/TypeFormField";
import styles from "./Settings.module.scss";
import { GroupType } from "../../core/Models/Template/Settings/Types/GroupType";
import { TypesFormFieldsGroup } from "./TypesFormFieldsGroups/TypesFormFieldsGroup";
import { SettingsTypeInterface } from "../../core/Models/Template/Settings/Types/SettingsTypeInterface";
import { TemplateSettingsInterface } from "../../core/Models/Template/Settings/TemplateSettingsInterface";

function Settings(props: { editor: string }) {
  const { currentTemplate } = useSelector(getTemplatesStore);

  return (
    <div className={styles.container}>
      <div className={styles.formTitle}>{currentTemplate.name} settings</div>
      <form>
        {currentTemplate.settings.map((setting) => {
          if (!setting.type || !(setting.type instanceof SettingsType)) {
            return null;
          } else {
            if (
              setting.type &&
              setting.type instanceof GroupType &&
              setting.childSettings
            ) {
              return (
                <TypesFormFieldsGroup
                  editor={props.editor}
                  id={setting.id}
                  name={setting.name}
                  groupHandle={setting.type.getFormFieldHandle()}
                >
                  {setting.childSettings.map(
                    (setting: TemplateSettingsInterface) => {
                      if (
                        !setting.type ||
                        !(setting.type instanceof SettingsType)
                      ) {
                        return null;
                      } else {
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
                  )}
                </TypesFormFieldsGroup>
              );
            } else {
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
