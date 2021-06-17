import { Component, OnInit } from '@angular/core';
import { LocalSettingsService } from '../../_services/local-settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private localSettings: LocalSettingsService
  ) { }

  ngOnInit(): void {
  }

  setLanguage(e: any): void {
    let newLang: string = e.target.innerHTML;
    if (newLang === 'EN') {
      this.localSettings.setLanguage('en');
    } else if (newLang === 'CZ' || newLang === 'CZE') {
      this.localSettings.setLanguage('cs');
    }
    window.location.reload();
  }

}
