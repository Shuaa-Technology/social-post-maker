import { TemplateSettingsInterface } from "./TemplateSettingsInterface";
import { SettingsType } from "./Types/SettingsType";

export class TemplateSettings implements TemplateSettingsInterface {
  id: string;
  key: string;
  type: SettingsType;
  version: string;
  name: string;
  description: string;
  value: string;
}
