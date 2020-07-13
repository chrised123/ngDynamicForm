import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {

  @Input() item;
  @Input() form;
  constructor() { }

  get controlName(): any {
    if (this.form) {
      return this.form.controls[`${this.item.name}`];
    }
    return null;
  }

  ngOnInit(): void {

  }

}
