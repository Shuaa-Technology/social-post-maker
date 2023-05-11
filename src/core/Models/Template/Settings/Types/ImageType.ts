import { SettingsType } from "./SettingsType";

export class ImageType extends SettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'IMAGE';
    }


    getFormFieldHandle(): string {
        return 'ImageFormField';
    }

    renderValue(value: string) {
        return value ?? '';
    }
}
