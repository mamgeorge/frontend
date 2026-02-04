import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.html',
  imports: [ CommonModule ],
  styleUrl: './userlist.css'

})
export class Userlist implements OnInit {

  users: any[] = []

  constructor(private userService: Userservice) {}

  ngOnInit(): void {
    this.refreshUsers()
  }

  refreshUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users)
  }
}
