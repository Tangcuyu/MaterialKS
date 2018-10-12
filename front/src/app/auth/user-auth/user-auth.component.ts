import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../core-modules/user-service.service';
import { IUserConfig } from '../../core-modules/model'

@Component({
  selector: 'itsi-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  userConfig: IUserConfig;
  headers: string[];

  constructor(private userService: UserServiceService ) { }

  ngOnInit() {
    this.showUserConfigResponse();
  }

  // get data from userService with httpclient
  showUserConfig() {
    this.userService.getConfig().subscribe((data: IUserConfig) => {
      this.userConfig = {...data};
    });
  }

  // get full response from userService
  showUserConfigResponse() {
    this.userService.getConfigResponse().subscribe(
      (resp) => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        this.userConfig = { ...resp.body };
      }
    );

  }

}
