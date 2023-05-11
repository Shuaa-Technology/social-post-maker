import { FieldProps } from "./TypeFormField";

export function ImageFormField(props: FieldProps) {
    const { id, name, value = '' } = props;
  
    return (
        /*todo: fix image value*/
      <div>
        <label htmlFor={id}>{name}</label>
        <input type="file" accept="image/*" id={id} name={name} value='' />
      </div>
    );
}