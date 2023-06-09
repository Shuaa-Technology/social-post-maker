import { FieldSettingsType } from "../FieldSettingsType";

export class UrlType extends FieldSettingsType {


  constructor() {
   super()
}
  static getHandle(): string {
    return 'FIELD/URL';
}
  getFormFieldHandle(): string {
    return 'UrlFormField';
  }

  renderValue(value: string) {
    return value ?? '';
  }
}
