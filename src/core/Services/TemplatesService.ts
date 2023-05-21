import { PAGINATION_SIZE } from "../../config/templates";
import API from "../API";

import { TemplateInterface } from "../Models/Template/TemplateInterface";
import { SettingsType } from "../Models/Template/Settings/Types/SettingsType";
import { ImageType } from "../Models/Template/Settings/Types/Field/ImageType";
import { ColorType } from "../Models/Template/Settings/Types/Field/ColorType";
import { TextType } from "../Models/Template/Settings/Types/Field/TextType";
import { TemplateSettingsInterface } from "../Models/Template/Settings/TemplateSettingsInterface";
import { GroupType } from "../Models/Template/Settings/Types/Group/GroupType";

export class TemplatesService {
  templates: TemplateInterface[];
  constructor() {
    this.templates = [];
  }

  getTemplates(limit: number = PAGINATION_SIZE): Promise<TemplateInterface[]> {
    this.templates = [];
    return new Promise<TemplateInterface[]>((resolve, reject) =>
      API.get(`templates` + (limit > 0 ? `?_limit=${limit}` : ""))
        .then((res) => {
          this.templates = res.data.map((template: TemplateInterface) => {  /* @todo Use recursive */ 
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
        .catch((error) => {
          console.error(error);
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
      render: "<span style='color:black;' >Default Template HTML <span>" /* BETTER WAY? */,
      settings: [
        {
          id: "1",
          key: "thumbnail",
          type: new ImageType(),
          version: "1.0.0",
          name: "Thumbnail",
          description: "Upload a thumbnail image",
          value:
            "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        },
        {
          id: "2",
          key: "headerColor",
          type: new ColorType(),
          version: "1.0.0",
          name: "Header Color",
          description: "Select a color for the header",
          value: "#ffffff",
        },
        {
          id: "3",
          key: "bodyTextColor",
          type: new ColorType(),
          version: "1.0.0",
          name: "Body Text Color",
          description: "Select a color for the body text",
          value: "#000000",
        },
        {
          id: "4",
          key: "heading",
          type: new TextType(),
          version: "1.0.0",
          name: "Heading",
          description: "Enter a heading for the template",
          value: "Example Heading",
        },
        {
          id: "5",
          key: "body",
          type: new TextType(),
          version: "1.0.0",
          name: "Body",
          description: "Enter the body content for the template",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu felis quis mi dignissim laoreet.",
        },
      ],
    };
  }
}
