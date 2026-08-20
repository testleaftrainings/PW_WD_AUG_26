import test from "@playwright/test";

//test.use({storageState:'Data/SFlogin.json'})
test('Skip the login using storagestate',async({page})=>{

    await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home')
    await page.locator("//span[text()='Accounts']").click()
    await page.waitForTimeout(2000)

})