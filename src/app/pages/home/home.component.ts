import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

	faSearch = faSearch;
	faPlus = faPlus;

	

  constructor(private modalService: NgbModal, config: NgbModalConfig) {
  	config.backdrop = 'static';
  	config.keyboard = false;
  }

  ngOnInit(): void {
  }

   open(content: any) {
    this.modalService.open(content);
   }

}
