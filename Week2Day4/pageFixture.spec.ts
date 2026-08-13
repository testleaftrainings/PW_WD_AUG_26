/* const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage() */

import test from "@playwright/test";

    test('learn page fixture',async({page})=>{

        await page.goto('https://www.amazon.in')
        await page.waitForTimeout(2000)

    })
    //test('')