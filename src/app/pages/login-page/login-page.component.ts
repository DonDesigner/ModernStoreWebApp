import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CustomValidator } from '../../validators/custom.validator';
import { Ui } from '../../utils/ui';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  //Executado depois que a view ´é renderizada
  ngOnInit() {
    this.dataService.getCourses().subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  checkEmail() {

    this.ui.lock('emailControl');

    setTimeout(() => {
      this.ui.unlock('emailControl');
      console.log(this.form.controls['email'].value);
    }, 3000);

  }

  submit() {
    this.dataService.createUser(this.form.value);
  }

  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
  }

}
