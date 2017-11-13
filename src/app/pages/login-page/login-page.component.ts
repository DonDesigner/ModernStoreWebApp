import { Router } from '@angular/router';
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

  public errors: any[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService, private route: Router) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

    var token = localStorage.getItem('mws.token');
    if(token){
      this.route.navigateByUrl('/home');
    }

    //this.checkToken();
  }

  checkToken(){
    var token = localStorage.getItem('mws.token');
    if(this.dataService.validateToken(token)){
      this.route.navigateByUrl('/home');
    }
    
  }

  //Executado depois que a view ´é renderizada
  ngOnInit() {

  }

 
  submit() {
    this.dataService
    .authenticate(this.form.value)
    .subscribe(result=> {
      localStorage.setItem('mws.token', result.token);
      localStorage.setItem('mws.user', JSON.stringify(result.user));
      this.route.navigateByUrl('/home');
    }, error=>{
      this.errors = JSON.parse(error._body).errors;
    });
  }

  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
  }

}
