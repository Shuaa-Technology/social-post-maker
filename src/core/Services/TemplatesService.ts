import API from "../API";

import { TemplateInterface } from "../Models/Template";

export class TemplatesService {
  templates: TemplateInterface[];
  constructor() {
    this.templates = [];
  }

  getEmployees(): Promise<TemplateInterface[]> {
    this.templates = [];
    return new Promise<TemplateInterface[]>((resolve, reject) =>
      API.get(`templates`)
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
}
