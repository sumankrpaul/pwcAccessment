import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import User from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  maxListItem = 7;
  rawUserList: User[] = [];
  
  currentPage = 1;
  totalPage = 1;
  

  userList: User[] = [];
  showUserList: User[] = [];
  
  constructor(private userService: UsersService){}

  ngOnInit(){
    this.getUserList();
    
  }

  showUserData(list: User[]){
    this.userList = list;
  }

  searchList(searchString: string){
    console.log(searchString);
    this.userList = this.rawUserList.filter(user=>{
      return user.name.toLowerCase().includes(searchString.toLowerCase()) 
      || user.username.toLowerCase().includes(searchString.toLowerCase());
    });
    this.paginateUserList();
  }

  paginateUserList(page=1){
    let start = (page-1)*this.maxListItem, 
    end = ((start+this.maxListItem) > this.userList.length)? (this.userList.length) : start+this.maxListItem,
    totalPage = Math.ceil((this.userList.length-1)/this.maxListItem);
    
    this.showUserList = this.userList.slice(start, end);
    this.totalPage=totalPage;
    this.currentPage=page;
  }

  getUserList(){
    this.userService.getUsers().subscribe((response)=>{
      this.rawUserList = response;
      this.userList = response;
      this.paginateUserList();
    })
  }
}
