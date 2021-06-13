import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService {

  constructor() { }

  getLanguage(): string {
    if (localStorage){
      return localStorage['language'] || "";
    } else {
      return "";
    }
  }

  setLanguage(language: string): void {
    if (localStorage) {
      localStorage['language'] = language;
    }
  }

}
