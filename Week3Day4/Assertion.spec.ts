import test, { expect } from "@playwright/test";

test('Playwright  assertions',async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')

    console.log(await page.title());
    console.log(page.url());
    
    //retry assertion (for locators and page)
    await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/login')
    await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')

    //non retry assertion(comparision)
    const url = page.url()
    const Title = await page.title()

    expect(url).toBe('https://leaftaps.com/opentaps/control/login')
    expect(Title).toContain('Leaftaps - TestLeaf')

    await expect(page.locator('#username')).toBeVisible()
    const pwd = page.locator('#password')
    await expect(pwd).toBeEmpty()
    await expect(pwd).toBeEditable()
    await expect(pwd).toBeEnabled()

    //by default it's hard assertion when assertion fails 
    // it stop the execution in same line
    //await expect(pwd).toBeDisabled()

    //soft assertion - continues to execute next line of code
    await expect.soft(pwd).toBeDisabled({timeout:8000})

    await page.locator('#username').fill('demoCSR2',{timeout:5000})
    await page.locator('#password').fill('crmsfa')

    console.log('Asertion completed successfully');
    

})