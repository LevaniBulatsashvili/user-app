import { UserInterface } from './../interfaces/user.interface';
import { getUsersService } from './../services/getUsers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: UserInterface[] = []
  page: number = 1;
  loading: boolean = false;

  constructor(private getUsersService: getUsersService, private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
    this.fetchUsers()
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }


  visitUser(user: UserInterface) {
    this.getUsersService.fetchFullUser(+user.id)
    this.router.navigate([`/user/${user.id}`])
  }

  fetchUsers() {
      this.loading = true
      this.getUsersService.fetchUsers(this.page)
      this.page++
      this.getUsersService.getUsers().subscribe(data => this.users = [...this.users,  ...data.list])
      this.loading = false
  }

  scroll = (): void => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      this.fetchUsers()
    };
  }


}
