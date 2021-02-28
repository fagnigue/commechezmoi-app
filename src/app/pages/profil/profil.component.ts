import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private cookieService: CookieService, private route: Router) { }

  ngOnInit(): void {
  }



  logout(){
  	this.removecookie('infos');
  	this.route.navigate(['/']);
  }

  removecookie(key: string) {
  	this.cookieService.remove(key);
  }

}
