import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
  @tracked data = [];
  @tracked temp = '';
  // @tracked flag = true;

  @action handleSubmit(e) {
    e.preventDefault();
    this.data.push(this.temp);
    // this.flag = true;
    this.temp = '';
    console.log(this.data);
  }
  @action update(e) {
    this.temp = e.target.value;
    // this.flag = false;
  }
  @action delete(e) {
    this.data = this.data.filter((item) => item !== e);
  }
}
