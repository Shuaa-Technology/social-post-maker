import { TemplateSettings } from "./TemplateSettings";
import { TemplateSettingsInterface } from "./TemplateSettingsInterface";
import { GroupSettingsType } from "./Types/GroupSettingsType";


export class TemplateSettingsGroup extends TemplateSettings {
  type: GroupSettingsType;
  childSettings?: TemplateSettingsInterface[];
}
