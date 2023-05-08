import { SettingsType } from "./SettingsType";


export class ColorType extends SettingsType {
    constructor() {
        super()
     }
    static getHandle(): string {
        return 'COLOR';
    }

    getFormField(value: string) {
        return (
            <input
                type="color"
                value={value ?? "#000000"}
                id={this.id}
                data-handle={ColorType.getHandle()}
            />
        );
    }

    displayValue(value: string): string {
        return value ?? '';
    }
}
