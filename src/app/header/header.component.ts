import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus$: Observable<Menu[]>;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.menus$ = this.headerService.getMenus();
  }

}
