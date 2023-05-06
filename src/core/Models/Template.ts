import { TemplateSettings } from "./TemplateSettings";

export interface TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  render: string;
  settings: TemplateSettings[];

  /*   getRender(): string;
  parse(): TemplateInterface; */
}

export class Template implements TemplateInterface {
  id: string;
  version: string;
  name: string;
  description: string;
  height: number;
  width: number;
  render: string;
  settings: TemplateSettings[] = [];

  public getRender(): string {
    return this.render;
  }

  public getSettings(): TemplateSettings[] {
    return this.settings;
  }

  public setSettings(settings: TemplateSettings[]): TemplateInterface {
    this.settings = settings;
    return this;
  }

  /*   public getSettingsByKey(key: string): TemplateSettings | null {
    return this.settings.filter(function (el: TemplateSettings) {
      return el.key === key;
    })[0];
  }

  public parse(): Template {
    this.render = this.render.replace(/%\w+%/g, (placeholder: string) => {
      return this.getSettingsByKey(placeholder)?.value || placeholder;
    });
    return this;
  } */

  /* For  now   as  Static */
  public static getSettingsByKey(
    template: TemplateInterface,
    key: string
  ): TemplateSettings | null {
    return template.settings.filter(function (el: TemplateSettings) {
      return el.key === key;
    })[0];
  }

  public static parse(template: TemplateInterface): string {
    return template.render.replace(/%\w+%/g, (placeholder: string) => {
      return (
        Template.getSettingsByKey(template, placeholder.slice(1, -1))?.value || placeholder
      );
    });
  }
}
