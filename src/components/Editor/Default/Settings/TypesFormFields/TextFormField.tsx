import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./TextFormField.module.scss";


export default function TextFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
     <div className={styles.field}>
        <label htmlFor={id}>{name}</label>
        <input type="text" id={id} name={name} value={value} />
      </div>
    );
  }