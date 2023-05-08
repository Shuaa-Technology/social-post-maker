import { SettingsType } from "./Type";

export class TextType extends SettingsType {


  constructor() {
   super()
}
  static getHandle(): string {
    return 'TEXT';
}
  getFormField(value: string) {
    return (
        <input
            type="text"
            defaultValue={value ?? ''}
            id={this.id}
            data-handle={TextType.getHandle()}
        />
    );
  }

  displayValue(value: string) {
    return value ?? '';
  }
}
