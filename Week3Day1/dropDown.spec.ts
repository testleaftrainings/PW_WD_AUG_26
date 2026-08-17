import test from "@playwright/test";

test('Learn dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')

    await page.locator('[class="ui-selectonemenu"]').selectOption({label:'Playwright'})
    await page.waitForTimeout(2000)
    await page.locator('[class="ui-selectonemenu"]').selectOption({index:3})
    await page.waitForTimeout(2000)

    //await page.locator('[class="ui-selectonemenu"]').selectOption({value:''})

    const dropDown = page.locator('[class="ui-selectonemenu"]>option')
    const dropDownValue = await dropDown.count()

    console.log('the dropdown count is ',dropDownValue);

    for (let index = 0; index < dropDownValue; index++) {
        console.log( await dropDown.nth(index).innerText());
        
        
    }
    
})