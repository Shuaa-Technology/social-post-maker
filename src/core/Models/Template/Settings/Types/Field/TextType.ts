import { FieldSettingsType } from "../FieldSettingsType";

export class TextType extends FieldSettingsType {


  constructor() {
   super()
}
  static getHandle(): string {
    return 'FIELD/TEXT';
}
  getFormFieldHandle(): string {
    return 'TextFormField';
  }

  renderValue(value: string) {
    return value ?? '';
  }
}
