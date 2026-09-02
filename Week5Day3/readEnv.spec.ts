import test from "@playwright/test";
import dotenv from 'dotenv'

//to read a single env file
dotenv.config({path:'Utils/qa.env'})

//toggle btw different environment
let fileName = process.env.envFile || "qa" || "prod"
dotenv.config({path:`Utils/${fileName}.env`})

test('Learn to read env file',async({page})=>{
    //process.env is global object that is used to read environment variables
    //console.log(process.env.username);
    await page.goto(process.env.L_URL as string)
await page.locator('#username').fill(process.env.L_UserName as string)
await page.locator('#password').fill(process.env.L_Password as string)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
    
})