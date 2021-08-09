import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendCreateComponent } from './friend-create/friend-create.component';
import { FriendEditComponent } from './friend-edit/friend-edit.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    NavComponent,
    FriendsComponent,
    FriendCreateComponent,
    FriendEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
