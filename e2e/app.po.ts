import { browser, element, by } from 'protractor';

export class HvaHackcampPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hb-app h1')).getText();
  }
}
