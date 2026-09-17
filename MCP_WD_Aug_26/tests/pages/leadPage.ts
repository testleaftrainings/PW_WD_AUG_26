import { Page } from '@playwright/test';

export class LeadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickCreateLead(): Promise<void> {
    // Click the Create Lead link from the Leads page.
    await this.page.locator('a:has-text("Create Lead")').click();
  }
}
