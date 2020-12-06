import { User } from './../../../shared/models/User';
import { AddUser } from './../../../shared/actions/user-action';
import { Store } from '@ngxs/store';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { UserService } from './../../user.service';
import { ApiService } from './../../api.service';
import { getLocaleDirection } from '@angular/common';
import { Component, Pipe, Directive, ElementRef, EventEmitter, Input, OnInit, Output, PipeTransform } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public password: string;
  public login: string;
  public logged: boolean = false;
  public waiting: boolean = false;
  public logErr :boolean = null;
  public loggedUser:User = new User();


  constructor(private fb: FormBuilder, private userService: UserService, private apiService: ApiService, private userstore: Store) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.logErr = null;
  }

  onSubmit(event)
  {
    this.waiting = true;
    this.apiService.setJWT();
    this.userService.logUser(this.login, this.password).subscribe((response) => {
      // add user to connect store
      console.log(response);
      if(response.success == true) {
        // this.logErr = false;
        this.loggedUser.login = this.login;
        this.loggedUser.password = this.password;
        this.loggedUser.firstname = 'Random';
        this.loggedUser.lastname = 'User';
        this.loggedUser.zipcode = '67700';
        this.loggedUser.city = 'Somewhere';
        this.loggedUser.gender = 'Man';
        this.loggedUser.mail = 'somewhere@user.fr';
        this.loggedUser.country = 'fr';
        this.loggedUser.phone = '0100011055';
        this.loggedUser.adress = '1 John Avenue';
        // this.logged = true;
        this.userstore.dispatch(new AddUser(this.loggedUser));
      }
      else {
        this.waiting = false;
        this.form.value.login = null;
        this.form.value.password = null;
        this.logErr = true;
      }
    });
  }

}
