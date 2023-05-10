import { SettingsType } from "./SettingsType";


export class ColorType extends SettingsType {
    constructor() {
        super()
     }

    static getHandle(): string {
        return 'COLOR';
    }

    getFormFieldHandle(): string {
        return 'color_field';
    }

    renderValue(value: string): string {
        return value ?? '#000';
    }
}
