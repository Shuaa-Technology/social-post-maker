import { SettingsType } from "./Type";


export class SizeType extends SettingsType {

    get handle(): string {
        return 'SIZE';
    }

    getFormField(value: string) {
        return (
            <input
                type="number"
                value={value ?? 0}
                id={this.id}
                data-handle={this.handle}
            />
        );
    }

    displayValue(value: string) {
        return `${value ?? 0}px`;
    }

}
