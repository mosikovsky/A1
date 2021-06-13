import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalSettingsService } from './_services/local-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public translate: TranslateService,
    private localSettings: LocalSettingsService
  ) {
    // translate init
    translate.addLangs(['cs', 'en']);
    translate.setDefaultLang('cs');

    let lang: string;

    var storedLang: string = localSettings.getLanguage();
    if (storedLang !== "") {
      lang = storedLang;
    } else {
      lang = navigator.language;
    }

    if (lang === 'en-GB' || lang === 'en-US' || lang === 'en') {
      translate.use('en');
    } else if (lang === 'cs') {
      translate.use('cs');
    }
  }

}
