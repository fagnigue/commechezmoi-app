import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';

import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

	 addForm = this.fb.group({
	    type: ['', Validators.required],
	    titre: ['', Validators.required],
	    photo: ['', Validators.required],
	    description: ['', Validators.required],
	 });

	 url = '';
	 snapname = '';
	 snaptype = '';
	 photo_error = '';
	 general_error =  '';


  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  readfile(event: any) {

    if(event.target.files && event.target.files[0]) {
      
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      const snap = event.target.files[0];

      this.snapname = snap.name;
      this.snaptype = snap.type;

      if(this.snaptype == "image/jpeg" || this.snaptype == "image/png") {
      	console.log('valide');
      	reader.readAsDataURL(event.target.files[0]);
      	this.photo_error = '';
      	console.log(snap);
      } else {
      	this.photo_error = "entrez une image au format jpeg ou png ou jpg";
      }
      
    }

  }

   addnews() {
    const datas = this.addForm.value;
    datas.photo = this.snapname
    
    if(datas.titre != '' && datas.photo != '' && datas.description != '') {
    	 if(this.snaptype == "image/jpeg" || this.snaptype == "image/png") {
	      	console.log('valide');
	      	this.photo_error = '';


	      	console.log(datas);


	     } else {
	      	this.photo_error = "entrez une image au format jpeg ou png ou jpg";
      	 }
    }else {
    	this.general_error = "remplissez tous les champs !";
    }

   }





}
