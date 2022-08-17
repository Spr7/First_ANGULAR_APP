import { Component } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // template: `<h3>USERS COMPONETS.....</h3>`,
  // styles: [
  //   `
  //     h3 {
  //       color: gray;
  //     }
  //   `,
  // ],
})
export class UsersComponent {
  title: string = 'my app';
  user = {
    firstName: 'sampathi',
    lastName: 'prashanth',
    dob: new Date('june 12,2000'),
    income: 50000,
    votes: 150,
    company: 'deloitte',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    // avatar: 'https://randomuser.me/api/',
  };
  onMoreInfo(lastName: string, company: string) {
    alert(`Mr.${lastName} is working with ${company}`);
  }
  changeVotes(event: any) {
    this.user.votes = Number(event.target.value);
  }
}
