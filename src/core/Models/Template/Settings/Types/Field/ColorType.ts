import { FieldSettingsType } from "../FieldSettingsType";



export class ColorType extends FieldSettingsType {
    constructor() {
        super()
     }

    static getHandle(): string {
        return 'FIELD/COLOR';
    }

    getFormFieldHandle(): string {
        return 'ColorFormField';
    }

    renderValue(value: string): string {
        return value ?? '#000';
    }
}
