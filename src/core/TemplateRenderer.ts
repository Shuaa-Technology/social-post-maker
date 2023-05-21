import sanitizeHtml from "sanitize-html";
import { Template } from "./Models/Template/Template";
import { TemplateInterface } from "./Models/Template/TemplateInterface";
import { SANITIZE_OPTIONS } from "../config/render";



export class TemplateRenderer {
  _template: TemplateInterface;
  output: string = "";

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
      this.output = this._template.render.replace(
        /%\w+%/g,
        (placeholder: string) => {
          return (
            Template.getSettingsByKey(this._template, placeholder.slice(1, -1))
              ?.value || placeholder
          );
        }
      );
    }
    return this;
  }

  highlight(): TemplateRenderer {
    /* @todo */
    return this;
  }

  render(options?: any): string {
    /* @todo */
    return sanitizeHtml(this.output, { ...SANITIZE_OPTIONS, ...options });
  }
}
