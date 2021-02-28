import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { CookieService } from 'ngx-cookie';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	logForm = this.fb.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	});

  expiredDate = new Date();

	error_email = "";
	error_password = "";

  constructor(private fb: FormBuilder, private cookieService: CookieService) {

  }

  ngOnInit(): void {}

  signin() {

  	const datas = this.logForm.value;
  	

  	if(datas.email != "" && datas.password != "") {
  		if(datas.email.indexOf('@') == -1) {
  			this.error_email = "entrez une adresse email valide";
  			this.error_password = "";
  		} else {
  			this.error_email = "";
  			this.error_password = "";
  			console.log(datas);

        this.setCookie('infos', datas.email);

  		}
  	} else if(datas.email == "" && datas.password != "") {
  			this.error_email = "ce champ ci-dessous ne doit pas être vide";
  			this.error_password = "";
  	} else if(datas.password == "" && datas.email != "") {
  			if(datas.email.indexOf('@') == -1) {
	  			this.error_email = "entrez une adresse email valide";
	  			this.error_password = "ce champ ci-dessous ne doit pas être vide";
	  		} else {
  				this.error_password = "ce champ ci-dessous ne doit pas être vide";
  				this.error_email = "";
  			}
  	} else {
  		this.error_email = "ce champ ci-dessous ne doit pas être vide";
  		this.error_password = "ce champ ci-dessous ne doit pas être vide";
  	}

  }

  

  setCookie(key: string, value: string) {
    this.expiredDate.setDate(this.expiredDate.getDate() + 1);
    this.cookieService.put(key, value, {sameSite: 'lax', secure: true, httpOnly: false, expires: this.expiredDate});
  }


}
