import { PAGINATION_SIZE } from "../../config/templates";
import API from "../API";

import { TemplateInterface } from "../Models/Template";
import {ImageType} from "../Models/SettingsTypes/Image";
import {ColorType} from "../Models/SettingsTypes/Color";
import {TextType} from "../Models/SettingsTypes/Text";

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
          this.templates = res.data;
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
      height: 600,
      width: 600,
      render: "<span style='color:black;' >Default Template HTML <span>" /* BETTER WAY? */,
      settings: [
        {
          "id": "thumbnail",
          "key": "thumbnail",
          "type": new ImageType(),
          "version": "1.0.0",
          "name": "Thumbnail",
          "description": "Upload a thumbnail image",
          "value": "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
        },
        {
          "id": "header-color",
          "key": "headerColor",
          "type": new ColorType(),
          "version": "1.0.0",
          "name": "Header Color",
          "description": "Select a color for the header",
          "value": "#ffffff"
        },
        {
          "id": "body-text-color",
          "key": "bodyTextColor",
          "type": new ColorType(),
          "version": "1.0.0",
          "name": "Body Text Color",
          "description": "Select a color for the body text",
          "value": "#000000"
        },
        {
          "id": "heading",
          "key": "heading",
          "type": new TextType(),
          "version": "1.0.0",
          "name": "Heading",
          "description": "Enter a heading for the template",
          "value": "Example Heading"
        },
        {
          "id": "body",
          "key": "body",
          "type": new TextType(),
          "version": "1.0.0",
          "name": "Body",
          "description": "Enter the body content for the template",
          "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu felis quis mi dignissim laoreet."
        }
      ]
    };
  }
}
