import { FieldSettingsType } from "../FieldSettingsType";


export class SizeType extends FieldSettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'FIELD/SIZE';
    }

    getFormFieldHandle(): string {
        return 'SizeFormField';
    }

    renderValue(value: string) {
        return `${value ?? 0}px`;
    }

}
