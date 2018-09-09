import { LoginPage } from "./login.page";

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should successfully login', () => {
    page.navigateTo();
    page.sleep(5000);
    page.getLoginInput().sendKeys('testuser');
    page.sleep(5000);
    page.getPasswordInput().sendKeys('testuserpassword');
    page.sleep(5000);
    page.getSubmitButton().click();
    page.sleep(5000);
    expect(page.getLoginSuccessText().isPresent()).toBeTruthy();
  });
});