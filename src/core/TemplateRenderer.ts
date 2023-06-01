import sanitizeHtml from "sanitize-html";
import { Template } from "./Models/Template/Template";
import { TemplateInterface } from "./Models/Template/TemplateInterface";
import { SANITIZE_OPTIONS } from "../config/render";

export class TemplateRenderer {
  _template: TemplateInterface;
  _output: string = "";
  _style: string = "";

  setTemplate(template: TemplateInterface): TemplateRenderer {
    this._template = template;
    return this;
  }

  getTemplate(): TemplateInterface {
    return this._template;
  }

  parse(): TemplateRenderer {
    /* @todo: Better?! */
    if (this._template) {
      this._output = this._template.render.replace(
        /%\w+%/g,
        (placeholder: string) => {
          return (
            Template.getSettingsByKey(this._template, placeholder.slice(1, -1))
              ?.value || placeholder
          );
        }
      );
      if (this._template.style) {
        this._style = this._template.style.replace(
          /%\w+%/g,
          (placeholder: string) => {
            return (
              Template.getSettingsByKey(
                this._template,
                placeholder.slice(1, -1)
              )?.value || placeholder
            );
          }
        );
      }
    }
    return this;
  }

  style(): string {
    return this._style;
  }

  highlight(): TemplateRenderer {
    /* @todo */
    return this;
  }

  render(options?: any): string {
    /* @todo */
    return sanitizeHtml(this._output, { ...SANITIZE_OPTIONS, ...options });
  }
}
