import { TemplateSettingsInterface } from "./Settings/TemplateSettingsInterface";

export interface TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  render: string;
  settings: TemplateSettingsInterface[];

  /*   getRender(): string;
  parse(): TemplateInterface; */
}
