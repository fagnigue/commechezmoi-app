import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CookieService } from 'ngx-cookie';

import { Router } from '@angular/router';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  cookie = this.cookieService.get('infos');


  constructor(private modalService: NgbModal, config: NgbModalConfig, private cookieService: CookieService, private route: Router) {
  	config.backdrop = 'static';
  	config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content);
   }

  verif() {
     if(this.cookie == undefined) {
        this.route.navigate(['login']);
     } else {
       console.log('okay');
     }
  }




  /*  PUSH NOTIFICATION {"publicKey":"BHizaSzHMQXmH8hKs2DfQH0wJLaS55VVOJ-LCoP0YErMnsTu9Wf7DUDE3TpjWnkCgzo4bvAO5Ol8WL4jIOtWflk","privateKey":"M5D48YZleUZSypPI_QVRQPPvwmtrbsB1_paxRuFg9_4"}  */

}
