import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileTableComponent extends Component {
  @tracked selectedCount = 0;


  @action
  updateSelectedCount() {
    this.selectedCount = this.selectedCount + 1;
  }
}
