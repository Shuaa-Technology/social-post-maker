import { SettingsType } from "./SettingsType";

export abstract class FieldSettingsType extends SettingsType {
  constructor() {
    super();
  }

  // Currently it will return only the value named 'render' to keep the possiblity that the display of the value could be customized
  abstract renderValue(value: string): string;

  // TSX/JSX component handle (src\components\Settings\TypesFormFields\...)
  abstract getFormFieldHandle(): string;
}
