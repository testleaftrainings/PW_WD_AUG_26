/// <reference types="node" />

import { chromium, Page } from "@playwright/test";

/* 
actions performed in login page
load url
enter credentials
click login button */

class loginPage{

    page:Page //global variable / property

    constructor(lpage:Page){
        this.page =lpage
    }

    async LoadUrl(url:string){
        await this.page.goto(url)
    }

    async enterUsername(userName: string){

        await this.page.locator('#username').fill(userName)
        
    }

    async clickOnLogin(){
        await this.page.locator('#Login').click()
    }

    async enterPassword(password : string){
       await this.page.locator('#password').fill(password)
    }

    // async clickOnLogin1(){
    //     await this.page.locator('#Login').click()
    // }

    async closeBroser(){
        await this.page.close()
    }

}

//page instance is ready can be used by importing chromium from playwright library


async function doLogin() {
    
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    let lo = new loginPage(page)

    await lo.LoadUrl('https://login.salesforce.com/?locale=in')
    await lo.enterUsername('dilipkumar.rajendran@testleaf.com')
    await lo.clickOnLogin()
    await lo.enterPassword('TestLeaf@2025')
    await lo.clickOnLogin()
    await lo.closeBroser()


}

doLogin()