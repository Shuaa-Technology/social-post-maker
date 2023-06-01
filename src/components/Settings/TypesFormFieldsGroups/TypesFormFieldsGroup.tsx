import { lazy, Suspense, useMemo } from "react";
import styles from "./TypesFormFieldsGroup.module.scss";
import classNames from "classnames";

import { TemplateSettingsInterface } from "../../../core/Models/Template/Settings/TemplateSettingsInterface";
import { FieldSettingsType } from "../../../core/Models/Template/Settings/Types/FieldSettingsType";
import { TypeFormField } from "../TypesFormFields/TypeFormField";
import Loader from "../../Shared/Loader";

export interface GroupProps {
  id?: string;
  name?: string;
  children?: React.ReactNode;
}

export interface TypesFormFieldsGroup extends GroupProps {
  childSettings: TemplateSettingsInterface[];
  editor: string;
  groupHandle: string;
}

export function TypesFormFieldsGroup(props: TypesFormFieldsGroup) {
  const { editor, groupHandle, id, name, childSettings } = props;

  const Group = useMemo(
    () =>
      lazy(
        () =>
          import(
            `../../Editor/${editor}/Settings/TypesFormFieldGroups/${groupHandle}`
          )
      ),
    [groupHandle]
  );

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(styles.fieldGroup)}>
        <Group id={id} name={name}>
          {childSettings.map((setting: TemplateSettingsInterface) => {
            if (setting.type) {
              let settingFieldType = setting.type as FieldSettingsType;
              return (
                <TypeFormField
                  editor={props.editor}
                  id={setting.key}
                  name={setting.name}
                  fieldHandle={settingFieldType.getFormFieldHandle()}
                  value={setting.value}
                />
              );
            }
          })}
        </Group>
      </div>
    </Suspense>
  );
}
