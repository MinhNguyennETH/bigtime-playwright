import { test, } from './base-test';
import { LoginPage } from '../pages/LoginPage';
import Config from '../utils/configUtils';
import { allure } from 'allure-playwright';

test.describe.serial('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
  
    allure.feature('Login Feature');
    allure.owner('Minh Nguyen');
    allure.severity('Critical');

    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login Successful With Valid Credentials', async () => {
    allure.story('Valid Admin Login Story');

    await allure.step('Login with admin account', async () => {
      await loginPage.login(Config.admin_username, Config.admin_password);
    });

    await allure.step('Verify successful admin login', async () => {
      await loginPage.expectLoginSuccess();
    });
  });

  test('Login Successful With Employee Account', async () => {
    allure.story('Valid Employee Login Story');

    await allure.step('Login with employee account', async () => {
      await loginPage.login(Config.employee_username, Config.employee_password);
    });

    await allure.step('Verify successful employee login', async () => {
      await loginPage.expectLoginSuccess();
    });
  });

  test('Login Unsuccessful With Invalid Credentials', async () => {
    allure.story('Invalid Login Story');

    await allure.step('Login with invalid credentials', async () => {
      await loginPage.login('admin@bigapptech.vn', '123456');
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectLoginError();
    });
  });

  test('Login Unsuccessful With Empty Credentials', async () => {
    allure.story('Empty Login Story');

    await allure.step('Login with empty credentials', async () => {
      await loginPage.login('', '');
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectUsernameValidate();
      await loginPage.expectPasswordValidate();
    });
  });

  test('Login Unsuccessful With Empty Username', async () => {
    allure.story('Empty Username Login Story');

    await allure.step('Login with empty username', async () => {
      await loginPage.login('', Config.admin_password);
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectUsernameValidate();
    });
  });

  test('Login Unsuccessful With Empty Password', async () => {
    allure.story('Empty Password Login Story');

    await allure.step('Login with empty password', async () => {
      await loginPage.login(Config.admin_username, '');
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectPasswordValidate();
    });
  });

  test('Login Unsuccessful With Invalid Username', async () => {
    allure.story('Invalid Username Login Story');

    await allure.step('Login with invalid username', async () => {
      await loginPage.login('admin@bigapptech.vn', Config.admin_password);
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectLoginError();
    });
  });

  test('Login Unsuccessful With Invalid Password', async () => {
    allure.story('Invalid Password Login Story');

    await allure.step('Login with invalid password', async () => {
      await loginPage.login(Config.admin_username, 'asfasfasfas');
    });

    await allure.step('Verify login failure message', async () => {
      await loginPage.expectLoginError();
    });
  });
});
