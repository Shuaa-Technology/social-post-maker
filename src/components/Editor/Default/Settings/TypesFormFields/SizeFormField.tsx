import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./SizeFormField.module.scss";


export default function SizeFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
        <div className={styles.field}>
          <label htmlFor={id}>{name}</label>
          <input type="number" id={id} name={name} value={value} min="0" max="100" />
        </div>
      );
}