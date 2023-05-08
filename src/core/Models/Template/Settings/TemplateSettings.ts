import {SettingsType} from "./Types/SettingsType";

export interface TemplateSettings {
  id: string;
  key: string;
  type: SettingsType;
  version: string;
  name: string;
  description: string;
  value: string;
}
