import { SettingsType } from "./SettingsType";

export class TextType extends SettingsType {


  constructor() {
   super()
}
  static getHandle(): string {
    return 'TEXT';
}
  getFormFieldHandle(): string {
    return 'text_field';
  }

  renderValue(value: string) {
    return value ?? '';
  }
}
