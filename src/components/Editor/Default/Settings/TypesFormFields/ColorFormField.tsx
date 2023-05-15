import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./ColorFormField.module.scss";

export default function ColorFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
      <div className={styles.field}>
        <label htmlFor={id}>{name}</label>
        <input type="color" id={id} name={name} value={value} />
      </div>
    );
  }