import { Validators } from "@angular/forms";

const config = [
  {
    type: 'input',
    dataType: 'text',
    validation: [Validators.required, Validators.maxLength(10), Validators.minLength(3)],
    name: 'itemName',
    text: 'Select Name'
  },
  {
    type: 'input',
    dataType: 'number',
    validation: [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.max(120), Validators.min(18)],
    name: 'itemAge',
    text: 'Select Age'
  },
  {
    type: 'select',
    validation: [Validators.required],
    data: ['Cricket', 'Football', 'Hockey'],
    name: 'selectItem',
    text: 'Select Sport'
  },
];

export default config;
