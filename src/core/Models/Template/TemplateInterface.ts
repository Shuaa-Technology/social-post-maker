import { TemplateSettingsInterface } from "./Settings/TemplateSettingsInterface";

export interface TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  style?: string;
  render: string;
  settings: TemplateSettingsInterface[];

 
}
