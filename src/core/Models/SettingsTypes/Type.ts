

import { v4 as uuidv4 } from "uuid";

export interface SettingsTypeInterface {
    readonly id: string;
    handle?: string;
}

export abstract class SettingsType implements SettingsTypeInterface {
    constructor() {
        this.id = uuidv4();
    }

    id: string;

    private _handle: string;

    get handle(): string {
        return this._handle;
    }

    set handle(value: string) {
        this._handle = value;
    }

    abstract getFormField(value: string): React.ReactNode;

    abstract displayValue(value: string): string;

}
