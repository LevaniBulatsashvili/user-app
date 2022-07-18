import { Router } from '@angular/router';
import { UserInterface } from './../interfaces/user.interface';
import { FullUserInterface } from './../interfaces/fullUser.interface';
import { getUsersService } from './../services/getUsers.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: FullUserInterface
  friends: UserInterface[] = []
  page: number = 1
  loading: boolean = false

  constructor(private getUsersService: getUsersService, private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
    if(this.user) setTimeout(() => this.getFullUserDetails(), 500)
    else this.getFullUserDetails()
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  visitFriend(friend: UserInterface) {
    this.getUsersService.fetchFullUser(+friend.id)
    this.redirectTo(`/user/${friend.id}`)
  }

  getFullUserDetails() {
    this.getUsersService.getFullUserDetails().subscribe(data => {
      this.user = data
      this.fetchFriends()
    })
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  fetchFriends() {
      this.loading = true

      this.getUsersService.fetchFriends(this.user.id, this.page)
      this.page++
      this.getUsersService.getFriends().subscribe(data => this.friends = [...this.friends, ...data.list])
      this.loading = false
  }

  scroll = (): void => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      this.fetchFriends()
    }
  }

}
