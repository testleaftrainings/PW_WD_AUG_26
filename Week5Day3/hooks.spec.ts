import test from "@playwright/test";
import {parse} from 'csv-parse/sync'
import fs from 'fs'

let value:any[]

test.describe.serial('Run the test in serial mode',async()=>{


//connectivity to read data from CSV file
test.beforeAll('Database connectivity',async()=>{
    console.log('Runs before All');
    value =parse(fs.readFileSync('Utils/leaf.csv','utf-8'),
    {columns:true,skip_empty_lines:true})
})

//login functionality for each test

test.beforeEach('Login functionality for each test',async({page})=>{
    console.log('Run before each and every test');
    await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill(value[0].userName)
await page.locator('#password').fill(value[0].password)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
    
})

//test to create lead

test('create lead',async({page})=>{
    console.log('Create Lead Module');
    await page.locator("//a[text()='Leads']").click()
    
})

//test to create Account
test('create Account',async({page})=>{
    console.log('Create Account Module');
    await page.locator("//a[text()='Accounts']").click()
    
})

//print report status for each test

test.afterEach('print the status of report',async({},testinfo)=>{
    console.log('Runs after each and every test');

    console.log(testinfo.status);
    console.log(testinfo.title);  
    
})

test.afterAll('close the connection',async()=>{
    console.log('Run afterAll');
    
})

})
