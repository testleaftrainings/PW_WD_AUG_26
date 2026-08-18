import test from "@playwright/test";

test('Learn dynamic dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    await page.locator("text='Select Country'").nth(1).click()
    await page.locator('[data-label="India"]').click()
    await page.waitForTimeout(2000)

})