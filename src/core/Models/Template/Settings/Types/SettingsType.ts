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
      case "FIELD/SIZE":
        const { SizeType } = require("./Field/SizeType");
        return new SizeType();
      case "FIELD/COLOR":
        const { ColorType } = require("./Field/ColorType");
        return new ColorType();
      case "GROUP/ACCORDION":
        const { GroupType } = require("./Group/GroupType");
        return new GroupType();
      default: //@todo: in Production just skip it
        throw new Error(`Unsupported setting type: ${handle}`);
    }
  }
}
