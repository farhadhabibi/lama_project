import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyServiceService {
    private isUserLoggedIn;
  
  constructor(private http:Http) { 
  
  }
  saveAccount(A, B, C, D){
  	return this.http.post('https://jsonplaceholder.typicode.com/posts',{A, B, C, D} )
    .map((response) => response.json()
  	).subscribe(
     (data) => (console.log(data))
  	)
  }

  setUserLoggedIn(){
  	return this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
  	return this.isUserLoggedIn;
  }

}
