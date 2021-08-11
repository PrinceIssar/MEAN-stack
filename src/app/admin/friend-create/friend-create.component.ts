import { Component, OnInit } from '@angular/core';
import {FriendService} from "../../services/friend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friend-create',
  templateUrl: './friend-create.component.html',
  styleUrls: ['./friend-create.component.css']
})
export class FriendCreateComponent implements OnInit {

  name = '';
  phone = '';
  details = '';
  image = '';

  constructor(
    private friendService: FriendService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
submit(): void{
  const data = {
    name: this.name,
    phone: this.phone,
    details: this.details,
    image: this.image
  }

  this.friendService.create(data).subscribe(
    ()=>{
      this.router.navigate(['/admin/friends'])
    }
  )
}
}
