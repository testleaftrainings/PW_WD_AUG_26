import test from "@playwright/test";

test.use({
    geolocation:{latitude:12.9879791,longitude:77.0309288},
    permissions:['geolocation']
})
test("geolocation mocking",async({page})=>{

    await page.goto('https://www.google.com/maps')
    await page.locator('.sVuEFc').click()
    await page.waitForTimeout(5000)
})