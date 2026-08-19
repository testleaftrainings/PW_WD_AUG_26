import { test } from "@playwright/test";

test('Learn playwright locators',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByAltText('Salesforce login').isVisible()
    await page.getByText('Username',{exact:true}).fill('dilipkumar.rajendran@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password',{exact:true}).fill('TestLeaf@2025')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByTitle('App Launcher',{exact:true}).click()
    await page.getByLabel('View All Applications',{exact:true}).click()
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('lead')

    await page.getByTestId('DesktopFlexWatchNowOverlayTemplate').click()
})