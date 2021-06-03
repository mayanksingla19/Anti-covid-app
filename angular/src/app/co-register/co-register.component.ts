import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Covi } from '../covid';
import { CovidService } from '../covid.service';


@Component({
  selector: 'app-co-register',
  templateUrl: './co-register.component.html',
  styleUrls: ['./co-register.component.css']
})
export class CoRegisterComponent implements OnInit {

  
  topicHasError = true;

  submitted = false;

  aadhar = false;
  drive = false;
  pancard = false;

  errorMsg = "";

  Covi: FormGroup;
  
  covid:Covi = {
    Id_proof:'',
    Id_number:'',
    Name:'',
    D_O_B:''
  }
  constructor(private service: CovidService,
    private _router:Router) { 
      this.Covi = new FormGroup({
      Id_proof: new FormControl(null, Validators.required),
      
    });
  }


  ngOnInit(): void {
  }
  isValid(controlName) {
    return this.Covi.get(controlName).invalid && this.Covi.get(controlName).touched;
  }
  

  onRegisterSubmit() :void
  {
    console.log(this.covid);
     this.service.save(this.covid).subscribe(
       (data) => console.log(data),
       (err) => console.log(err)
     );
  }

  validateTopic(value: string) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  checkId(){
    if(this.covid.Id_proof == "Aadharcard"){
      this.aadhar = true;
    }else{
      this.aadhar = false;
    }

    if(this.covid.Id_proof=="drive"){
      this.drive = true;
      
    }
    else{
      this.drive = false;
    }
    if(this.covid.Id_proof=="pancard"){
      this.pancard = true;
      
    }
    else{
      this.pancard = false;
    }
  }
  

}
