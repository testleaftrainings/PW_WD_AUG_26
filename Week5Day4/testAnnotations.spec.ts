import test from "@playwright/test";

test('Launch browser',async({page})=>{
    await page.goto('https://www.amazon.in/')
})
test.skip('Launch flipkart browser',async({page})=>{
    await page.goto('https://www.flipkart.com/')
})

test.fail('Leaftaps login',async({page})=>{
    await page.goto('https://leaftas.com/opentaps/control/login')
await page.locator('#username').fill("demoCSR2")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
//await page.locator('#labe').click()
})

test.fixme('login',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
})

test('Test info annotation',async()=>{
    test.info().annotations.push({type:'Test info',
        description:"this is test info annotation"},
    {type:"Author",description:"Arun"})
})

test('Learn to use test.slow',async({page})=>{
    test.slow()
    await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill("demoCSR2")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
})