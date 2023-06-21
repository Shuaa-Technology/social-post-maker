import { ITEMS_PER_PAGE } from "../../config/templates";
import API from "../API";

import { TemplateInterface } from "../Models/Template/TemplateInterface";
import { SettingsType } from "../Models/Template/Settings/Types/SettingsType";
import { TextType } from "../Models/Template/Settings/Types/Field/TextType";
import { TemplateSettingsInterface } from "../Models/Template/Settings/TemplateSettingsInterface";
import { GroupType } from "../Models/Template/Settings/Types/Group/GroupType";
import { API_ENABLED } from "../../config/api";

export class TemplatesService {
  templates: TemplateInterface[];
  constructor() {
    this.templates = [];
  }


  /** 
   * get all templates from API or a local data surce
   *
   * @param {number} [page=1]
   * @param {number} [limit=ITEMS_PER_PAGE]
   * @return {*}  {Promise<TemplateInterface[]>}
   * @memberof TemplatesService
   */
  fetchTemplates(
    page: number = 1,
    limit: number = ITEMS_PER_PAGE
  ): Promise<TemplateInterface[]> {
    let templates = [];
    let _promise: any;
    const offset = (page - 1) * limit;
    if (API_ENABLED) {
      _promise = API.get(
        `templates` + (limit > 0 ? `?_start=${offset}&_limit=${limit}` : "")
      );
    } else {
      _promise = fetch(
        `data/api.json` 
      ).then((res: any) => {
        return res
          .json()
          .then((data: any) => {
            return { data: data.templates.slice(offset, offset + limit) };
          })
          .catch((err: any) => {
            console.log(err);
          });
      });
    }

    return new Promise<TemplateInterface[]>((resolve, reject) =>
      _promise
        .then((res: any) => {
          templates = res.data.map((template: TemplateInterface) => {
            /* @todo Use recursive */
            const settings = template.settings.map(
              (setting: TemplateSettingsInterface) => {
                let childSettings = undefined;
                if (
                  setting.type.handle == GroupType.getHandle() &&
                  setting.childSettings != undefined
                ) {
                  childSettings = setting.childSettings.map(
                    (childSetting: TemplateSettingsInterface) => {
                      const type = SettingsType.createType(
                        childSetting.type.handle
                      );
                      return {
                        ...childSetting,
                        type,
                      };
                    }
                  );
                }
                const type = SettingsType.createType(setting.type.handle);
                setting.childSettings = childSettings;
                setting.type = type;
                return setting;
              }
            );
            return {
              ...template,
              settings,
            };
          });
          resolve(templates);
        })
        .catch((error: any) => {
          reject(new Error(error));
        })
    );
  }


  /**
   *
   *
   * @param {string} id
   * @return {*}  {(TemplateInterface | null)}
   * @memberof TemplatesService
   */
  getTemplateById(id: string): TemplateInterface | null {
    return this.templates.filter(function (el) {
      return el.id === id;
    })[0];
  }

 /**
  *
  *
  * @return {*}  {TemplateInterface[]}
  * @memberof TemplatesService
  */
 getTemplates(): TemplateInterface[] {
    return  this.templates;
 }

 /**
  *
  *
  * @param {TemplateInterface[]} templates
  * @return {*}  {TemplatesService}
  * @memberof TemplatesService
  */
 addTemplates(templates:TemplateInterface[]): TemplatesService {
    this.templates = this.templates.concat(templates)
     return this;
  }



  /**
   * Gets default template
   * @returns default template 
   */
  getDefaultTemplate(): TemplateInterface {
    return {
      id: "1",
      version: "1.0.0",
      name: "Default template",
      description: "This is a default template.",
      height: 500,
      width: 500,
      render: "<span style='color:black;' >%heading% <span>",
      settings: [
        {
          id: "1",
          key: "heading",
          type: new TextType(),
          version: "1.0.0",
          name: "Heading",
          description: "Enter a heading for the template",
          value: "Default Template HTML",
        },
      ],
    };
  }
}
