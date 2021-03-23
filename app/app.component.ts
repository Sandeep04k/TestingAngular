import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('fr');
  }

 

  changeLocale(locale: string) {
    this.translateService.use(locale);
  }
}
