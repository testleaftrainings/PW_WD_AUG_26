import test from "@playwright/test";

test.describe('smoke testing',()=>{

    test.describe.configure({mode:'parallel'})

    test('Launch browser',async({page})=>{
        await page.goto('https://www.amazon.in/')
    })

    test('Launch flipkart browser',async({page})=>{
        await page.goto('https://www.flipkart.com/')
    })

    test('Learn to use test.slow',async({page})=>{
        test.slow()
        await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill("demoCSR2")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    })
})