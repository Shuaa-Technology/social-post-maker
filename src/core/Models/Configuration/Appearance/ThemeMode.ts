import {ThemeModeInterface} from "./ThemeModeInterface";

export class ThemeMode implements  ThemeModeInterface{
    private _handle: string;
    private _name: string;
    private _thumbnail: string;

    constructor(handle: string, name: string, thumbnail: string) {
        this._handle = handle;
        this._name = name;
        this._thumbnail = thumbnail;
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

    get thumbnail(): string {
        return this._thumbnail;
    }

    set thumbnail(thumbnail: string) {
        this._thumbnail = thumbnail;
    }
}

export default ThemeMode;
