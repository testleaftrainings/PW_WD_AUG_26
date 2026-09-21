import { test } from "@playwright/test";
import { createLead, fetchLead, generateToken } from "./apiUtility";

test('Learn playwright locators',async({page,request})=>{

    await generateToken(request)//named function is called to make an API call for generate token
    await createLead(request) //named function is called to make an API call for creation of lead
    let lName = await fetchLead(request) //named function is called to make an API call to retrieve the lead info

    await page.goto('https://login.salesforce.com/?locale=in')
    //await page.getByAltText('Salesforce login').isVisible()
    await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password',{exact:true}).fill('TestLeaf@2025')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(20000)
    
    await page.getByTitle('App Launcher',{exact:true}).click()
    await page.waitForTimeout(3000)
    await page.getByLabel('View All Applications',{exact:true}).click()
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('leads')
    await page.getByText('Leads',{exact:true}).click()
    const searchBox = page.getByPlaceholder('Search this list...',{exact:true})
    await searchBox.fill(lName)
    await searchBox.press('Enter')
    await page.waitForTimeout(3000)


    
})