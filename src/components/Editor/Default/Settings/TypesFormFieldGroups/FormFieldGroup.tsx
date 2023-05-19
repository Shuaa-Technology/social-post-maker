import { GroupProps } from "../../../../Settings/TypesFormFieldsGroups/TypesFormFieldsGroup";
import styles from "./FormFieldGroup.module.scss";

export default function FormFieldGroup(props: GroupProps) {
  const { id, name, children } = props;

  return (
    <div className={styles.fieldsGroup}>
      <h4> {name}</h4>
      {children}
    </div>
  );
}
