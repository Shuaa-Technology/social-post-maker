import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./ColorFormField.module.scss";

export default function ColorFormField(props: FieldProps) {
    const { id = "", name="", value = '',handleOnChange } = props;


    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      handleOnChange(id, e.currentTarget.value)
    }

    return (
      <div className={styles.field}>
        <label htmlFor={id}>{name}</label>
        <input className={styles.colorInput} type="color" id={id} name={name} onChange={onChange} value={value} />
      </div>
    );
  }