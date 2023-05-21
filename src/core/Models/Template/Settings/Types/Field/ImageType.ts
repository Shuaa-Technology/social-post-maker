import { FieldSettingsType } from "../FieldSettingsType";


export class ImageType extends FieldSettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'FIELD/IMAGE';
    }


    getFormFieldHandle(): string {
        return 'ImageFormField';
    }

    renderValue(value: string) {
        return value ?? '';
    }
}
