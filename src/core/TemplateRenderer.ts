import sanitizeHtml from "sanitize-html";
import { Template } from "./Models/Template/Template";
import { TemplateInterface } from "./Models/Template/TemplateInterface";
import { SANITIZE_OPTIONS } from "../config/render";

export class TemplateRenderer {
  _template: TemplateInterface;
  _output: string = "";
  _style: string = "";



  /**
   *
   *
   * @param {TemplateInterface} template
   * @return {*}  {TemplateRenderer}
   * @memberof TemplateRenderer
   */
  setTemplate(template: TemplateInterface): TemplateRenderer {
    this._template = template;
    return this;
  }


  /**
   *
   *
   * @return {*}  {TemplateInterface}
   * @memberof TemplateRenderer
   */
  getTemplate(): TemplateInterface {
    return this._template;
  }


  /**
   * modify all placeholders with their corresponding values.
   *
   * @return {*}  {TemplateRenderer}
   * @memberof TemplateRenderer
   */
  parse(): TemplateRenderer {
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

 /**
  *
  *
  * @return {*}  {string}
  * @memberof TemplateRenderer
  */
 style(): string {
    return this._style;
  }

  /**
   * get sanitized HTML content.
   *
   * @param {*} [options]
   * @return {*}  {string}
   * @memberof TemplateRenderer
   */
  render(options?: any): string {
    return sanitizeHtml(this._output, { ...SANITIZE_OPTIONS, ...options });
  }
}
