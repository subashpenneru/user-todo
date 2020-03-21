import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from '../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  userData: number;

  constructor(private _fb: FormBuilder, private _userSrv: UserService) { 
    this.userForm = this._fb.group({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      age: new FormControl(null, [Validators.required, Validators.min(18)])
    })
  }

  ngOnInit(): void {
  }

  /**
   * save user details to server
   * @author Subash
   */
  saveUser() {
    let userDetails = this.userForm.value;
    
    const user: User = {
      id: 0,
      firstName: userDetails.fname,
      lastName: userDetails.lname,
      email: userDetails.email,
      password: userDetails.pwd,
      age: userDetails.age,
    }

    this._userSrv.getLastIndexId().subscribe(id => {

      user.id = id + 1;
      this._userSrv.addUsers(user).subscribe(res => {
        
        console.log(res);
        this.userData = id + 1;
      }, err => console.log(err));
    }, err => err);
    
    this.userForm.reset();
  }
}
