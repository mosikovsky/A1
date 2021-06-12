import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  setLanguage(e: any): void {
    let newLang: string = e.target.innerHTML;
    if (newLang === 'EN') {
      this.translate.use('en');
      this.translate.setDefaultLang('en');
    } else if (newLang === 'CZ') {
      this.translate.use('cs');
      this.translate.setDefaultLang('cs');
    }
  }

}
