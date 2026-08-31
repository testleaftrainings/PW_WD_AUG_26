import test from "@playwright/test";
import path from "path";

test('Learn to upload file using input tag with type = file',async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')
    //relative path for single file upload

    /* const fileUpload = page.locator('(//input[@type="file"])[1]')
    await fileUpload.setInputFiles('Utils/Testleaflogo.png')
    await page.waitForTimeout(2000)

    // relative path for multiple file upload

    const fileUpload1 = page.locator('(//input[@type="file"])[2]')
    await fileUpload1.setInputFiles(['Utils/Testleaflogo.png','Utils/Qeaglelogo.png'])
    await page.waitForTimeout(3000) */

    //Absolute path for single file upload
    //path.join(__dirname, '../../Utils/Testleaflogo.png')

    const fileUpload2 = page.locator('(//input[@type="file"])[1]')
    await fileUpload2.setInputFiles(path.join(__dirname,'../../Utils/Testleaflogo.png'))
    await page.waitForTimeout(2000)

    //Absolute path for multiple file upload
    const fileUpload3 = page.locator('(//input[@type="file"])[2]')
    await fileUpload3.setInputFiles([path.join(__dirname,'../../Utils/Qeaglelogo.png')
        ,path.join(__dirname,'../../Utils/Testleaflogo.png')])
        await page.waitForTimeout(3000)

})

test.only('upload file using event listner with no input tag',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')

    //create event listener

    const fload = page.waitForEvent('filechooser')
    await page.locator('//div[@id="drag-drop-upload"]').click() // trigger the upload
    const fileUpload = await fload //resolving the promise

    await fileUpload.setFiles('Utils/Testleaflogo.png') // upload file from the mentioned path
    
})