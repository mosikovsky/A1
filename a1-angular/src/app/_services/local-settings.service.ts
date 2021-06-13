import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService {

  constructor(public translate: TranslateService) { }

  getLanguage(): string {
    if (localStorage) {
      return localStorage['language'] || "";
    } else {
      return "";
    }
  }

  setLanguage(language: string): void {
    if (localStorage) {
      localStorage['language'] = language;
      this.translate.use(language);
      this.translate.setDefaultLang(language);
    }
  }

}
