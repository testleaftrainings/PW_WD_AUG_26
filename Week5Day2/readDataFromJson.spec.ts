import test from "@playwright/test";
import loginData from '../../Data/leaftaps.json'
//Declares a group of tests that should always be run serially. 
// If one of the tests fails, all subsequent tests are skipped. 
// All tests in a group are retried together
test.describe.serial('running serial mode',()=>{


//syntax :
//for( let userdefinedvariable of data)

for(let data of loginData){
test(`Learn to read json file ${data.TestCaseID}`,async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill(data.UserName)
await page.locator('#password').fill(data.Password)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
})
}
})


let data = loginData[0]
test.only('learn to read single json file',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('#username').fill(data.UserName)
await page.locator('#password').fill(data.Password)
await page.locator('.decorativeSubmit').click()
await page.locator('#label').click()
})