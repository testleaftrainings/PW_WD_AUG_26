import test from "@playwright/test";

test('learn to handle frame using frame Object',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')
    //page.once()
    //single frame

    const frameRef = page.frame({url:'https://www.leafground.com/default.xhtml'})
    await frameRef?.locator('#Click').click()

    //nested frame 
    const frameRef1 = page.frame({name:"frame2"})
    await frameRef1?.locator('#Click').click()
})

test.only('learn to handle frame using framelocator',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')

    //single frame
    await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()

    //nested frame
    await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2')
    .locator('#Click').click()
})