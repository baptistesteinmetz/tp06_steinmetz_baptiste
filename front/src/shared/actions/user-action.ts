import { User } from './../models/User';

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: User) {
  }
}
export class ConnectUser {
  static readonly type = '[User] Log';
  constructor(public payload: User) {}
}
export class ShowUser {
  static readonly type = '[User] Show';
  constructor(public payload: User) {}
}
