import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {FriendCreateComponent} from "./admin/friend-create/friend-create.component";
import {FriendEditComponent} from "./admin/friend-edit/friend-edit.component";
import {FriendsComponent} from "./admin/friends/friends.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '', component:MainComponent
  },
  {
    path: 'admin', component:AdminComponent,
    children: [
      {
        path: 'friends',component:FriendsComponent
      },
      {
        path:'friends/create',component:FriendCreateComponent
      },
      {
        path:'friends/:id/edit', component: FriendEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
