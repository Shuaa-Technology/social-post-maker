import {SettingsType} from "./SettingsTypes/Type";

export interface TemplateSettings {
  id: string;
  key: string;
  type: SettingsType;
  version: string;
  name: string;
  description: string;
  value: string;
}
