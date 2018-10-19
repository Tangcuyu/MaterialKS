import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itsi-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public username: string;
  public submitted = false;
  public usertitle: string;
  constructor() {
    this.username = 'test';
  }
  ngOnInit() {
  }

  validateUserName = (name: string): Promise<boolean> => {
    return Promise.resolve(true);
  }
  save(formWorkout: any) {
    this.submitted = true;
    if (!formWorkout.valid) { return; }
    /* this.workoutBuilderService.save().subscribe(
      success => this.router.navigate(['/builder/workouts']),
      err => console.error(err)
    ); */
  }


}
