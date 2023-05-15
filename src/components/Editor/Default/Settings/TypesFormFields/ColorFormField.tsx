import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";


export default function ColorFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
      <div>
        <label htmlFor={id}>{name}</label>
        <input type="color" id={id} name={name} value={value} />
      </div>
    );
  }