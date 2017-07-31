import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit {
  constructor(private router:Router, private service:MyServiceService) { }
	  form;
	  ngOnInit(){
		  	this.form = new FormGroup({
		  	firstname: new FormControl("", Validators.compose([
		  		Validators.required,
		  		Validators.minLength(3),
		  		Validators.pattern('[\\w\\-\\s\\/]+')
		  	])),
		  	lastname: new FormControl("", this.myFun),
		  	password: new FormControl(""),
		  	cpassword: new FormControl(""),
		  	language: new FormControl(""),

		  });
	    }
		myFun(control){
			if (control.value.length < 3){
				return {lastname: true}
			}
		}
        p(user){
			var p = user.password;
			var cp = user.cpassword;
			if (p != cp){
				document.getElementById('pr').innerHTML = "password not match";
                return false;
			}
			else{
			this.router.navigate(['log']);}
        }
		onSubmit = function(user){
			this.p(user);
		   var A = user.firstname;
		    var B = user.lastname;
		    var C = user.password;
		   var D = user.cpassword;
			console.log(user);
			this.service.saveAccount(A, B, C, D)
		}

}
