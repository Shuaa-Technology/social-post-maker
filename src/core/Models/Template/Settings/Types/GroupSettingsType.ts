import { v4 as uuidv4 } from "uuid";

import { SettingsType } from "./SettingsType";

export abstract class GroupSettingsType extends SettingsType {
  constructor() {
    super();
  }



  // TSX/JSX component handle (src\components\Settings\TypesFormFieldGroups\...)
  abstract getFormGroupHandle(): string;
}
