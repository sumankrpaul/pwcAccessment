import { Component } from '@angular/core';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor(private userService: UsersService){}

  ngAfterContentInit(){
    this.userService.getUsers().subscribe((response)=>{
      console.log(response);
    })
  }
}
