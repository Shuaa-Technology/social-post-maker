import { ITEMS_PER_PAGE } from "../../config/templates";
import API from "../API";

import { TemplateInterface } from "../Models/Template/TemplateInterface";
import { SettingsType } from "../Models/Template/Settings/Types/SettingsType";
import { ImageType } from "../Models/Template/Settings/Types/Field/ImageType";
import { ColorType } from "../Models/Template/Settings/Types/Field/ColorType";
import { TextType } from "../Models/Template/Settings/Types/Field/TextType";
import { TemplateSettingsInterface } from "../Models/Template/Settings/TemplateSettingsInterface";
import { GroupType } from "../Models/Template/Settings/Types/Group/GroupType";
import { API_ENABLED } from "../../config/api";
import { UrlType } from "../Models/Template/Settings/Types/Field/UrlType";

export class TemplatesService {
  templates: TemplateInterface[];
  constructor() {
    this.templates = [];
  }

  getTemplates(
    page: number = 1,
    limit: number = ITEMS_PER_PAGE
  ): Promise<TemplateInterface[]> {
    this.templates = [];
    let _promise: any;
    const offset = (page - 1) * limit;

    if (API_ENABLED) {
      _promise = API.get(
        `templates` + (limit > 0 ? `?_start=${offset}&_limit=${limit}` : "")
      );
    } else {
      _promise = fetch(
        `data/api.json` + (limit > 0 ? `?_start=${offset}&_limit=${limit}` : "")
      ).then((res: any) => {
        return res
          .json()
          .then((data: any) => {
            return { data: data.templates.slice(offset, limit) };
          })
          .catch((err: any) => {
            console.log(err);
          });
      });
    }

    return new Promise<TemplateInterface[]>((resolve, reject) =>
      _promise
        .then((res: any) => {
          this.templates = res.data.map((template: TemplateInterface) => {
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
          resolve(this.templates);
        })
        .catch((error: any) => {
          reject(new Error(error));
        })
    );
  }

  getTemplateById(id: string): TemplateInterface | null {
    return this.templates.filter(function (el) {
      return el.id === id;
    })[0];
  }

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
