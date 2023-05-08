

import { v4 as uuidv4 } from "uuid";
import { ImageType } from "./Image";
import { TextType } from "./Text";
import { ColorType } from "./Color";

export interface SettingsTypeInterface {
    readonly id: string;
    readonly handle: string;
}

export abstract class SettingsType implements SettingsTypeInterface {

    id: string;
    handle: string = "";

    constructor() {
        this.id = uuidv4();
    }


     /* Type Factory */ /* Fix */
/*  static createType(handle: string) {
    if (handle == ImageType.getHandle()) {
      return new ImageType();
    } else if (handle == TextType.getHandle()) {
      return new TextType();
    } else if (handle == ColorType.getHandle()) {
      return new ColorType();
    } else {
        return new TextType();
    }
  }
 */
    abstract getFormField(value: string): React.ReactNode;

    abstract displayValue(value: string): string;


}
