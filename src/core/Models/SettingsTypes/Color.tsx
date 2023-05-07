import { SettingsType } from "./Type";


export class ColorType extends SettingsType {

    get handle(): string {
        return 'COLOR';
    }

    getFormField(value: string) {
        return (
            <input
                type="color"
                value={value ?? "#000000"}
                id={this.id}
                data-handle={this.handle}
            />
        );
    }

    displayValue(value: string): string {
        return value ?? '';
    }
}
