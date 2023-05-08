import { SettingsType } from "./SettingsType";
import React from "react";


export class ImageType extends SettingsType {

    constructor() {
        super()
     }
    static getHandle(): string {
        return 'IMAGE';
    }


    getFormField() {
        // todo change this to external component
        return (
            <input type="file" accept="image/*" id={this.id} data-handle={ImageType.getHandle()}  />
        );
    }
    displayValue(value: string) {
        const img = document.createElement("img");
        img.src = value ?? '';
        img.style.width = "200px"; // Set the image width to 200px
        return img.outerHTML;
    }
}
