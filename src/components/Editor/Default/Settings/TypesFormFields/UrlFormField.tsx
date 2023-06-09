import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./UrlFormField.module.scss";

export default function UrlFormField(props: FieldProps) {
  const { id = "", name = "", value = "", handleOnChange } = props;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleOnChange(id, e.currentTarget.value);
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{name}</label>
      <input type="url" name={name} value={value} onChange={onChange}></input>
    </div>
  );
}
