import { GroupSettingsType } from "../GroupSettingsType";

export class GroupType extends GroupSettingsType {
  constructor() {
    super();
  }
  static getHandle(): string {
    return "GROUP/ACCORDION";
  }

  getFormGroupHandle(): string {
    return "AccordionFieldGroup";
  }
}
