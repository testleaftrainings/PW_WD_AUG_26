import { Page, expect } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCRM(): Promise<void> {
    // Open the CRM/SFA module after login. The app may render the link after a brief transition,
    // so we wait for the locator to be attached before clicking instead of asserting the link
    // from the pre-login state.
    const crmLink = this.page.locator('a:has-text("CRM/SFA")');
    await crmLink.waitFor({ state: 'visible', timeout: 15000 });
    await crmLink.click();
  }
}
