import { PAGINATION_SIZE } from "../../config/templates";
import API from "../API";

import { TemplateInterface } from "../Models/Template";

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
      settings: [],
    };
  }
}
