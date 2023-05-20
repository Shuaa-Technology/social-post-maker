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
      case "IMAGE":
        const { ImageType } = require("./ImageType");
        return new ImageType();
      case "TEXT":
        const { TextType } = require("./TextType");
        return new TextType();
      case "SIZE":
        const { SizeType } = require("./SizeType");
        return new SizeType();
      case "COLOR":
        const { ColorType } = require("./ColorType");
        return new ColorType();
      case "GROUP":
        const { GroupType } = require("./GroupType");
        return new GroupType();
      default:
        throw new Error(`Unsupported setting type: ${handle}`);
    }
  }

  // Currently it will return only the value named 'render' to keep the possiblity that the display of the value could be customized
  abstract renderValue(value: string): string;

  // TSX/JSX component handle (src\components\Settings\TypesFormFields\...)
  abstract getFormFieldHandle(): string;
}
