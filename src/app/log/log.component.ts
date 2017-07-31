import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  alert: string = "this field is required";
  constructor(private rout:Router, private service:MyServiceService) { }
  form;
  ngOnInit() {
  	this.form = new FormGroup({
  		firstname: new FormControl("", Validators.compose([
       Validators.minLength(3),

        ])),
  		password: new FormControl ("", Validators.required),
  	});
  }
  onSubmit = function(e){
      this.service.setUserLoggedIn();
  	  console.log(e);	
      this.rout.navigate(['sign-in']);
  	}
}
