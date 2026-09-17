import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { CreateLeadPage } from './pages/createLeadPage';

test.describe('LeafTaps Lead Creation', () => {
  test('create lead using POM with Faker-generated data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const createLeadPage = new CreateLeadPage(page);

    // Step 1: open the app and log in using the planner credentials.
    await loginPage.openLoginPage();
    await loginPage.login('democsr2', 'crmsfa');

    // Step 2: follow the real navigation flow used by the LeafTaps app.
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();

    // Step 3: create a new lead with generated data.
    const data = await createLeadPage.createLead();

    // Step 4: validate that the created first name appears on the view page.
    await expect(page.locator('#viewLead_firstName_sp')).toContainText(data.firstName, { timeout: 20000 });
  });
});
