import { SettingsType } from "./Type";
import React from "react";


export class ImageType extends SettingsType {

    get handle(): string {
        return 'IMAGE';
    }

    getFormField() {
        return (
            <input type="file" accept="image/*" id={this.id} data-handle={this.handle}  />
        );
    }
    displayValue(value: string) {
        const img = document.createElement("img");
        img.src = value ?? '';
        img.style.width = "200px"; // Set the image width to 200px
        return img.outerHTML;
    }
}
