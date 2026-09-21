import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jiraticket";

test('Test to record a specific bug',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByAltText('Salesforce login').isVisible()
    await page.getByText('Username',{exact:true}).fill('dilipkumar.rajendran@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password',{exact:true}).fill('TestLeaf@2025')
    await page.getByRole('button',{name:'button1'}).click()

})

test.afterEach('Fetch the test status', async({},tesInfo)=>{
    await logADefectInJira(tesInfo)
})