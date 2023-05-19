import { SettingsType } from "./SettingsType";

export class GroupType extends SettingsType {
  constructor() {
    super();
  }
  static getHandle(): string {
    return "GROUP";
  }
  getFormFieldHandle(): string {
    return "FormFieldGroup";
  }

  renderValue(value: string) {
    return "";
  }
}
