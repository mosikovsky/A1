import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalSettingsService} from "../../_services/local-settings.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private localSettings: LocalSettingsService
  ) { }

  ngOnInit(): void {
  }

  setLanguage(e: any): void {
    let newLang: string = e.target.innerHTML;
    if (newLang === 'EN') {
      this.localSettings.setLanguage('en');
      this.translate.use('en');
    } else if (newLang === 'CZ') {
      this.localSettings.setLanguage('cs');
      this.translate.use('cs');
    }
  }

}
