import { FieldProps } from "./TypeFormField";

export function SizeFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
        <div>
          <label htmlFor={id}>{name}</label>
          <input type="number" id={id} name={name} value={value} min="0" max="100" />
        </div>
      );
}