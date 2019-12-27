import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetName,
      'click:.save-model': this.onSave
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSave = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
      <input placeholder="${this.model.get('name')}" type="text">
      <button class="set-name"> Change Name</button>
      <button class="set-age"> Set Age </button>
      <button class="save-model"> Save User </button>
      </div>
    `;
  }
}
