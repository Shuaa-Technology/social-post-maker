import { TemplateSettings } from "./TemplateSettings";

export interface TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  render: string;
  settings: TemplateSettings[] ;
}
