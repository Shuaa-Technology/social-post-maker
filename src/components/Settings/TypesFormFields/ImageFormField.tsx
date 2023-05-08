import {ImageType} from "../../../core/Models/Template/Settings/Types/ImageType";

export function ImageFormField(props: any) {
    return (
        <input type="file" accept="image/*" id={props.id} data-handle={ImageType.getHandle()} />
    );
}