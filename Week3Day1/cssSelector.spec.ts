import test from "@playwright/test";

test('Learn css selector',async({page})=>{

    await page.goto('https://login.salesforce.com/')
    //await page.locator('[name="username"]').fill('dilipkumar.rajendran@testleaf.com')
   // await page.locator('[name*="user"]').fill('dilipkumar.rajendran@testleaf.com')
   await page.locator('div>input').first().fill('dilipkumar.rajendran@testleaf.com')
   //await page.locator('div>input').nth(0).fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('input[id="Login"]').click()

    //await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('.label+input').nth(0).fill('TestLeaf@2025')

    await page.locator('input[id="Login"]').click()
    await page.waitForTimeout(2000)
})