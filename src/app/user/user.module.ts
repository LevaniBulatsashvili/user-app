import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserComponent}])
  ]
})
export class UserModule { }
