import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../services/friend.service";
import {Friend} from "../../interfaces/friend";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[]= []
  constructor(private friendService: FriendService ) { }

  ngOnInit(): void {
    this.friendService.all().subscribe(
      friends =>{
        this.friends = friends
      }
    )
  }

 friendDel(id: number): void{
    this.friendService.delete(id).subscribe(
      ()=>{
        this.friends = this.friends.filter( f => f._id !== id);
      }
    )
  }

}
