import { Component, OnInit } from '@angular/core';
import config from './../data';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.scss']
})
export class FormParentComponent implements OnInit {

  formGroup: FormGroup;
  config = config;
  constructor() { }

  ngOnInit(): void {
    let formObj = {};
    config.map(item => {
      formObj[`${item.name}`] = new FormControl('', item.validation);
    });
    this.formGroup = new FormGroup(formObj);
    console.log(this.formGroup);
  }

}
