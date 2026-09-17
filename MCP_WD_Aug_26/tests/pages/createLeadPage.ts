import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CreateLeadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createLead(): Promise<{ companyName: string; firstName: string; lastName: string }> {
    // Generate realistic values to avoid hardcoded test data.
    const companyName = faker.company.name();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const companyField = this.page.locator('#createLeadForm_companyName');
    const firstNameField = this.page.locator('#createLeadForm_firstName');
    const lastNameField = this.page.locator('#createLeadForm_lastName');
    const submitButton = this.page.locator('.smallSubmit');

    await companyField.waitFor({ state: 'visible', timeout: 20000 });
    await companyField.fill(companyName);
    await firstNameField.fill(firstName);
    await lastNameField.fill(lastName);
    await submitButton.click();

    return { companyName, firstName, lastName };
  }
}
