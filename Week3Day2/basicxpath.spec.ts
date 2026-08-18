import test from "@playwright/test";

test('Learn x-path',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('//input[@id="username"]').fill('demoCSR2')
    await page.locator('//input[contains(@id,"pass")]').fill('crmsfa')
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
})