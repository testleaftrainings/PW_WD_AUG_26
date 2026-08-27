import test from "@playwright/test";

test('Handling multiplw windows',async({page,context})=>{
    await page.goto('https://leafground.com/window.xhtml')

//playwright starts listening for the new tab and immediately perform click action

    const [parentPage] = await Promise.all([context.waitForEvent('page'),
page.locator("//span[text()='Open Multiple']").click()
    ])

    //[parentPage] = parent page, ch1, ch2

    const count = parentPage.context().pages() //Returns all open pages in the context.
    console.log(count.length);// total no of pages = 3
    await page.waitForTimeout(3000)

    // variables used to store specific child windows

    let dasboard : any
    let webtable : any

    for(let i =0; i<count.length; i++){
        await page.waitForLoadState('domcontentloaded')

        const title = await count[i].title()
        console.log(title);
        /* Window
        Web Table
        Dashboard */
//if title matches dashboard
//store that page object in dashboard variable
        if(title ==='Dashboard'){
            dasboard = count[i]
        }else if(title === 'Web Table'){
            webtable = count[i]
        }
        
    }

    await dasboard.locator('//input[@id="email"]').fill('admin@testleaf.com')

    await webtable.locator('//input[@placeholder="Search"]').fill('Russia')

    await page.waitForTimeout(3000)
    

})