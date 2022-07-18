import { FullUserInterface } from './../interfaces/fullUser.interface';
import { UserInterface } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getUsersService {
  private users!: Observable<{pagination: {}, list: UserInterface[]}>;
  private fullUser!: Observable<FullUserInterface>;
  private friends!: Observable<{pagination: {}, list: UserInterface[]}>;

  constructor(private http: HttpClient) {}

  fetchUsers(page: number) {
    this.users = this.http.get<{pagination: {}, list: UserInterface[]}>(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/100`);
  }

  getUsers() {
    return this.users;
  }

  fetchFullUser(userId: number) {
    this.fullUser = this.http.get<FullUserInterface>(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`);
  }

  getFullUserDetails() {
    return this.fullUser
  }

  fetchFriends(userId: number, page: number) {
    this.friends =  this.http.get<{pagination: {}, list: UserInterface[]}>(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/100`)
  }

  getFriends() {
    return this.friends
  }
}
