import { tap } from 'rxjs/operators';
import { UserState } from './../../../shared/states/user-state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { User } from '../../../shared/models/User';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(rawNum) {
    rawNum = rawNum.charAt(0) !== 0 ? rawNum.substring(1) : '' + rawNum.substring(1);
    let newStr = '';
    let i = 0;
    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + '-';
    }

    return newStr + rawNum.substr(i * 2);
  }
}

@Pipe({
  name: 'callcode'
})
export class CodePipe implements PipeTransform {
  transform(country) {
    switch(country) {
      case 'fr' :
        return '+33';
        break;
      case 'en' :
        return '+44';
        break;
      case 'gr' :
        return '+49';
        break;
      case 'us' :
        return '+1';
        break;
    }
  }
}

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})

export class RecapComponent implements OnInit {
  user: User = new User();
  // visible: boolean = false;

  // @Input () user: User = new User();
  @Input () formValidate: boolean = false;

  user$: Observable<User>;

  constructor(private store: Store) {
    // get user from store$

  }

  ngOnInit(): void {
    // console.log('init')
    this.store.select(UserState.getUser).subscribe(
      (data) => {this.user = data;}
    );
  }
  // @Input () userName: string;

}
