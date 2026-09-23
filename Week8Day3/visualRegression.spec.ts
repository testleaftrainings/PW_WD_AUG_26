import test, { expect } from "@playwright/test";

test("visual regression",async({page})=>{
    await page.goto('https://www.flipkart.com/')
    let snapshot = await page.screenshot()
    expect(snapshot).toMatchSnapshot()
})

test.only('visual regression for static application',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    let snapshot = await page.screenshot({path:"leaf.png"})
    expect(snapshot).toMatchSnapshot("leaf.png")
})