import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm = this.fb.group({
		nom: ['', Validators.required],
		prenom: ['', Validators.required],
		profil: ['', Validators.required],
		email: ['', Validators.required],
		password: ['', Validators.required],
		verif_password: ['', Validators.required],
		telephone: ['', Validators.required],
		adresse: ['', Validators.required]
	});


	general_error = '';
	error_email = '';
	error_password = '';
	error_verif_password = '';
	jeton_mail = '';
	jeton_password = '';


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {


  	const datas = this.registerForm.value;

  	if(datas.nom == "" || datas.prenom == "" || datas.profil == "" || datas.email == "" || datas.password == "" || datas.verif_password == "" || datas.telephone == "" || datas.adresse == "") {
  		this.general_error = "remplissez les champs vides";
  	} else {
  		this.general_error = '';
  		if(datas.email.indexOf('@') == -1) {
  			this.error_email = "entrez une adresse email valide";
  			this.error_verif_password = '';
  		} else {
  			this.error_email = '';
  			this.jeton_mail = 'ok'
  		}
  		if(datas.password != datas.verif_password){
  			this.error_verif_password = "les mots de passe ne correspondent pas";
  		} else {
  			this.error_verif_password = '';
  			this.jeton_password = 'ok';
  		}

  		if(this.jeton_mail == 'ok' && this.jeton_password == 'ok'){

  			/* Si le formulaire est OK */
  			console.log(datas);
  		}

  	}


  }





}