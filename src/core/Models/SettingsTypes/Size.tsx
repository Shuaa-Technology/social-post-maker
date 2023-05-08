import { SettingsType } from "./Type";


export class SizeType extends SettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'SIZE';
    }

    getFormField(value: string) {
        return (
            <input
                type="number"
                value={value ?? 0}
                id={this.id}
                data-handle={SizeType.getHandle()}
            />
        );
    }

    displayValue(value: string) {
        return `${value ?? 0}px`;
    }

}
