import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FriendService} from "../../services/friend.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-friend-edit',
  templateUrl: './friend-edit.component.html',
  styleUrls: ['./friend-edit.component.css']
})
export class FriendEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // not to have error define here not in ngOnInit
    this.form = this.formBuilder.group({
      name: '',
      image:''
    })

    this.id = this.route.snapshot.params.id;

    this.friendService.get(this.id).subscribe(
      friend =>this.form.patchValue(friend)
    )
  }

  ngOnInit(): void {
  }

  submit(): void{
    this.friendService.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/friends'])
      }
    )
  }
}
