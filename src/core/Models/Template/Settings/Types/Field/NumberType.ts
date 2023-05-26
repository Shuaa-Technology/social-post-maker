import { FieldSettingsType } from "../FieldSettingsType";


export class NumberType extends FieldSettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'FIELD/NUMBER';
    }

    getFormFieldHandle(): string {
        return 'NumberFormField';
    }

    renderValue(value: string) {
        return `${value ?? 0}px`;
    }

}
