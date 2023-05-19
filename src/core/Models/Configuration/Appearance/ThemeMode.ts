import {ThemeModeInterface} from "./ThemeModeInterface";

export class ThemeMode implements  ThemeModeInterface{
    private _handle: string;
    private _name: string;

    constructor(handle: string, name: string) {
        this._handle = handle;
        this._name = name;
    }

    get handle(): string {
        return this._handle;
    }

    set handle(handle: string) {
        this._handle = handle;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

export default ThemeMode;
