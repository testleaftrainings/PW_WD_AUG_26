import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
  await page.getByRole('textbox', { name: 'Username' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
  await page.locator('#main').click();
  await page.getByLabel('dilipkumar.rajendran@testleaf').click();
  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await page.getByText('Remember me').click();
  await expect(page.locator('#login_form')).toContainText('Password');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('yuvarani');
  await page.getByText('* = Required Information').click();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('yuvarani');
  await expect(page.locator('html')).toMatchAriaSnapshot(`
    - document:
      - dialog "New Lead":
        - button "Cancel and close"
        - heading "New Lead" [level=2]
        - text: "* = Required Information"
        - heading "Lead Information" [level=3]
        - list:
          - listitem: Lead Owner Dilip Kumar
          - listitem:
            - text: "*Lead Status"
            - combobox "Lead Status": Open
            - status
          - listitem:
            - button "Undo Name"
            - group "Name required":
              - text: Name Salutation
              - combobox "Salutation": "--None--"
              - status
              - text: First Name
              - textbox "First Name": yuvarani
              - text: Last Name
              - textbox "Last Name" [invalid]
              - text: Last Name Complete this field.
          - listitem:
            - text: Phone
            - textbox "Phone"
          - listitem:
            - text: Company
            - textbox "Company"
          - listitem:
            - text: Email
            - textbox "Email"
          - listitem:
            - text: Title
            - textbox "Title"
          - listitem:
            - text: Rating
            - combobox "Rating": "--None--"
            - status
        - heading "Address Information" [level=3]
        - list:
          - listitem:
            - group "Address":
              - text: Address Address Search
              - combobox "Address Search"
              - status
              - text: Street
              - textbox "Street"
              - status
              - text: City
              - textbox "City"
              - text: Zip/Postal Code
              - textbox "Zip/Postal Code"
              - text: State/Province
              - textbox "State/Province"
              - text: Country
              - textbox "Country"
          - listitem:
            - text: Website
            - textbox "Website"
        - heading "Additional Information" [level=3]
        - list:
          - listitem:
            - text: No. of Employees
            - spinbutton "No. of Employees"
          - listitem:
            - text: Lead Source
            - combobox "Lead Source": "--None--"
            - status
          - listitem:
            - text: Annual Revenue
            - spinbutton "Annual Revenue"
          - listitem:
            - text: Industry
            - combobox "Industry": "--None--"
            - status
        - heading "Description Information" [level=3]
        - list:
          - listitem:
            - text: Description
            - textbox "Description"
            - status
        - button "Cancel"
        - button "Save & New"
        - button "Save"
        - status
      - status
    `);
});