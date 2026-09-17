import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openLoginPage(): Promise<void> {
    // Open the LeafTaps login page.
    await this.page.goto('https://leaftaps.com/opentaps/control/login');
    await expect(this.page.locator('#username')).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    // Fill in the credentials and submit the login form.
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('.decorativeSubmit').click();
  }
}
