import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from '../users.model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit, OnChanges {

  @Input('userId') id: number;
  users: Array<User> = [];

  constructor(private _userSrv: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.id.firstChange) {
      this.addUser();
    }
  }

  ngOnInit(): void {
    this.showUser();
  }

  /**
   * Displaying users list;
   * @author Subash
   */
  showUser() {
    this._userSrv.getUsers().subscribe(user => {
      this.users.push(...user);
    })
  }

  /**
   * Adding user data to table
   * @author Subash
   */
  addUser() {
    this._userSrv.getLastUser().subscribe(user => {
      this.users.push(user);
    })
  }

  /**
   * using @Input decorator to set user
   * @author Subash
   */
  // @Input()
  // set userId(value: number) {
  //   console.log(value)
  // }
  
}
