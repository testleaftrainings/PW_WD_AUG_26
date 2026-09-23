import test, { devices } from "@playwright/test";


test.use({
    ...devices['iPhone 15 Plus landscape']
})
test('Device Emulation', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
})