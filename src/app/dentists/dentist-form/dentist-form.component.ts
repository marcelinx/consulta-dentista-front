import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dentist-form',
  templateUrl: './dentist-form.component.html',
  styleUrls: ['./dentist-form.component.scss']
})
export class DentistFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {}
  onCancel() {}

}
