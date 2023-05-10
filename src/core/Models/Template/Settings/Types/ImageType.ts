import { SettingsType } from "./SettingsType";

export class ImageType extends SettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'IMAGE';
    }


    getFormFieldHandle(): string {
        return 'image_field';
    }

    renderValue(value: string) {
        return value ?? '';
    }
}
