import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
  @tracked data = [];
  @tracked temp = '';
  // @tracked flag = true;

  @action handleSubmit(e) {
    e.preventDefault();
    console.log(this.temp)
    this.data.pushObject(this.temp);
    // this.flag = true;
    this.temp = '';
    console.log(this.data);
  }
  @action update(e) {
    this.temp = e.target.value;
    // this.flag = false;
  }
  @action delete(ele) {
    this.data = this.data.filter((item) => item !== ele);
  }
}
