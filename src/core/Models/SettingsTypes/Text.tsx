import { SettingsType } from "./Type";

export class TextType extends SettingsType {

  get handle(): string {
    return 'TEXT';
  }

  getFormField(value: string) {
    return (
        <input
            type="text"
            defaultValue={value ?? ''}
            id={this.id}
            data-handle={this.handle}
        />
    );
  }

  displayValue(value: string) {
    return value ?? '';
  }
}
