import test from "@playwright/test";
import {parse} from 'csv-parse/sync'
import fs  from "fs";

let value = fs.readFileSync('Utils/sflogin.csv',"utf-8")
console.log(value);


//relative path to read data from CSV file

let value1:any[] = parse(value,
{skip_empty_lines:true,columns:true})
console.log(value1);


//for of loop to iterate 2 set of data
for(let details of value1){
test(`Learn to read CSV file ${details.tcId}`,async({page})=>{
    await page.goto('https://testleaf.my.salesforce.com/')
    await page.locator('#username').fill(details.userName)
    await page.locator('#Login').click()
    await page.locator('#password').fill(details.password)
    await page.locator('#Login').click()
})
}