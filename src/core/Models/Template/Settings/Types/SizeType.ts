import { SettingsType } from "./SettingsType";


export class SizeType extends SettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'SIZE';
    }

    getFormFieldHandle(): string {
        return 'SizeFormField';
    }

    renderValue(value: string) {
        return `${value ?? 0}px`;
    }

}
