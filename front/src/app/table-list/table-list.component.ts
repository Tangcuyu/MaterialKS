import { Component, OnInit } from '@angular/core';
import { User } from '../core-modules/model';
import { UserServiceService } from '../core-modules/user-service.service';

@Component({
  selector: 'itsi-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  userList: any;
  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this._userService.getConfig()
        .subscribe(
          res => { this.userList = res},
          err => console.log(err)
        )
  }

}
