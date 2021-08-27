import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemImageComponent extends Component {
  @tracked flag = false;

  @action toggle() {
    this.flag = !this.flag;
  }
}
