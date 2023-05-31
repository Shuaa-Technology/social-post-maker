import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import styles from "./NumberFormField.module.scss";

export default function NumberFormField(props: FieldProps) {
  const { id = "", name = "", value = "", handleOnChange } = props;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleOnChange(id, e.currentTarget.value);
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{name}</label>
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        min="0"
        max="100"
        onChange={onChange}
      />
    </div>
  );
}
