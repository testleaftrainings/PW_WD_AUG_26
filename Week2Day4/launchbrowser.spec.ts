import test, { chromium, firefox } from '@playwright/test'

test('launch chromium browser',async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.waitForTimeout(3000)
}) 
 
test.only('launch firefox browser',async()=>{
    const browser1 = await firefox.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto('https://leaftaps.com/opentaps/control/login')
    await page1.waitForTimeout(3000)
    console.log(await page1.title());
    
})

//npx playwright test filename.spec.ts