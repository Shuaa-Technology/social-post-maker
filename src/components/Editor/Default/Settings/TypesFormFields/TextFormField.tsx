import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";


export default function TextFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
      <div>
        <label htmlFor={id}>{name}</label>
        <input type="text" id={id} name={name} value={value} />
      </div>
    );
  }