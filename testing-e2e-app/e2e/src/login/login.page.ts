import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/');
  }

  sleep(time: number) {
    browser.sleep(time);
  }

  getLoginInput() {
    return element(by.id('username'));
  }

  getPasswordInput() {
    return element(by.id('password'));
  }

  getSubmitButton() {
    return element(by.id('submit'));
  }

  getLoginSuccessText() {
    return element(by.id('loginSuccess'));
  }
}