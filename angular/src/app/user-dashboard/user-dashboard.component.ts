import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { CoRegisterComponent } from '../co-register/co-register.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  username = '';
  constructor(private myService:MyserviceService,private dialog: MatDialog,
  private _router: Router) { 
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(CoRegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }

  
}
