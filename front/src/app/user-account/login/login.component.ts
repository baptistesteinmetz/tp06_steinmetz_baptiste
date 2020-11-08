import { Observable, ReplaySubject, Subject } from 'rxjs';
import { UserService } from './../../user.service';
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
  public logErr:boolean = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    this.userService.logUser(this.login, this.password).subscribe((response) => {
      if(response.success == true) {
      console.log('true');
      this.logErr = false;
        this.logged = true;
      }
      else {
        this.form.value.login = null;
        this.form.value.password = null;
        this.logErr = true;
      }
    });
  }

}
