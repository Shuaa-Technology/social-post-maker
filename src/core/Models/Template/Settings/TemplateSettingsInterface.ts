;
import { SettingsTypeInterface } from "./Types/SettingsTypeInterface";

export interface TemplateSettingsInterface {
  id: string;
  key: string;
  type: SettingsTypeInterface;
  version: string;
  name: string;
  description: string;
  value: string;
  childSettings?: TemplateSettingsInterface[];
}
