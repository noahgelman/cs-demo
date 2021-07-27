import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileTableComponent extends Component {
  @tracked allSelected = false;
  @tracked checkboxes = {};
  indeterminateCheckbox;

  get selectedCount() {
    let selectedCount = 0;
    for (const property in this.checkboxes) {
      if (this.checkboxes[property].checked) selectedCount++;
    }
    return selectedCount;
  }

  get availableFilesLength() {
    return Object.keys(this.checkboxes).length;
  }

  constructor() {
    super(...arguments);

    this.args.files.forEach((value, index) => {
      if (value.status == 'available') {
        this.checkboxes[`file${ index }`] = {
          checked: false,
          path: value.path
        };
      }
    });
  }

  @action
  setIndeterminateCheckbox(element) {
    this.indeterminateCheckbox = element;
  }

  @action
  updateIndeterminateCheckbox(index, event) {
    this.checkboxes[`file${ index }`].checked = event.target.checked;
    let checkedCount = 0;
    for (const property in this.checkboxes) {
      if (this.checkboxes[property].checked) checkedCount++;
    }

    if (checkedCount === 0) {
      this.allSelected = false;
      this.indeterminateCheckbox.indeterminate = false;
    } else if (checkedCount === this.availableFilesLength) {
      this.allSelected = true;
      this.indeterminateCheckbox.indeterminate = false;
    } else {
      this.allSelected = false;
      this.indeterminateCheckbox.indeterminate = true;
    }

    this.checkboxes = this.checkboxes;
  }

  @action
  updateSelectAll(event) {
    for (const property in this.checkboxes) {
      this.checkboxes[property].checked = event.target.checked;
    }

    this.checkboxes = this.checkboxes;
  }

  @action
  alertFilePaths(event) {
    let alertString = '';
    for (const property in this.checkboxes) {
      if (this.checkboxes[property].checked) {
        alertString += `${ this.checkboxes[property].path }\n`;
      }
    }
    alert(alertString);
  }
}
