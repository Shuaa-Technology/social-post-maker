import { ColorFormField } from "./ColorFormField";
import { ImageFormField } from "./ImageFormField";
import { SizeFormField } from "./SizeFormField";
import { TextFormField } from "./TextFormField";


  export interface FieldProps {
    id?: string;
    name?: string;
    value?: string;
  };

  export interface TypeFormFieldProps extends FieldProps {
    fieldHandle: string;
  };
  
  export function TypeFormField(props: TypeFormFieldProps) {
    
    const { fieldHandle, id, name, value = '' } = props;
  
    switch (fieldHandle) {
      case 'image_field':
        return <ImageFormField id={id} name={name}  value={value} />;
      case 'text_field':
        return <TextFormField id={id} name={name} value={value} />;
      case 'size_field':
        return <SizeFormField id={id} name={name} value={value} />;
      case 'color_field':
        return <ColorFormField id={id} name={name} value={value} />;
      default:
        return null;
    }
  }