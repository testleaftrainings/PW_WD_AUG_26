import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openLeads(): Promise<void> {
    // Open the Leads section from the CRM home page.
    await this.page.locator('a:has-text("Leads")').click();
  }
}
