import { v4 as uuidv4 } from "uuid";

import { SettingsTypeInterface } from "./SettingsTypeInterface";

export abstract class SettingsType implements SettingsTypeInterface {
  id: string;
  handle: string = "";

  protected constructor() {
    this.id = uuidv4();
  }

  //@todo: proper way?
  // const { ImageType } = require('./ImageType'); not sure about it but worked this way
  static createType(handle: string) {
    switch (handle) {
      case "FIELD/IMAGE":
        const { ImageType } = require("./Field/ImageType");
        return new ImageType();
      case "FIELD/TEXT":
        const { TextType } = require("./Field/TextType");
        return new TextType();
      case "FIELD/URL":
        const { UrlType } = require("./Field/UrlType");
        return new UrlType();
      case "FIELD/NUMBER":
        const { NumberType } = require("./Field/NumberType");
        return new NumberType();
      case "FIELD/COLOR":
        const { ColorType } = require("./Field/ColorType");
        return new ColorType();
      case "GROUP/ACCORDION":
        const { GroupType } = require("./Group/GroupType");
        return new GroupType();
      default: //@todo: Add a Environement test => skip in Prod && throw exception in Dev
        throw new Error(`Unsupported setting type: ${handle}`);
    }
  }
}
