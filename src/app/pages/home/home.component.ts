import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { CookieService } from 'ngx-cookie';

import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

	faSearch = faSearch;
	faPlus = faPlus;

	cookie = this.cookieService.get('infos');

  constructor(private cookieService: CookieService, private route: Router) {


  }

  ngOnInit(): void {}

  
  nextpage(){
    if(this.cookie == undefined) {
      this.route.navigate(['login']);
    } else {
      this.route.navigate(['addnews']);
    }
    
  }




}
