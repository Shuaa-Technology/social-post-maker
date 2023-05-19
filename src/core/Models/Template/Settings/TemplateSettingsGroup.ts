import { TemplateSettings } from "./TemplateSettings";
import { TemplateSettingsInterface } from "./TemplateSettingsInterface";
import { GroupType } from "./Types/GroupType";


export class TemplateSettingsGroup extends TemplateSettings {
  id: string;
  key: string;
  type: GroupType;
  version: string;
  name: string;
  description: string;
  value: string;
  childSettings?: TemplateSettingsInterface[];
}
