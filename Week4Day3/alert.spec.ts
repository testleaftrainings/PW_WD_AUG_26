import { test } from "@playwright/test";

test('Learn to handle alert',async({page})=>{
    await page.goto('https://leafground.com/alert.xhtml')
    page.on('dialog',async(alert)=>{
        //page.on is an event listner to listen for user interactions like click to capture the alert
        // alert is local variable that captures the simple alert object

        const message = alert.message()
        console.log(message);

        const alertType = alert.type()
        console.log(alertType);
        
        if(alertType === 'prompt'){
            await alert.accept('Testleaf')
        }else if(alertType === 'confirm'){
            await alert.accept() // to click ok button to accept the alert
        }else{
            await alert.dismiss() // to clcik cancel button
        }
    })

    await page.locator("(//span[text()='Show'])[1]").click() // simple alet click event to invoke an alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[2]").click()//confirm alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[5]").click()//promptalert
    await page.waitForTimeout(3000)
})

test.only('Learn to handle alert using page.once',async({page})=>{
    await page.goto('https://leafground.com/alert.xhtml')
    page.once('dialog',async(alert)=>{
        //page.on is an event listner to listen for user interactions like click to capture the alert
        // alert is local variable that captures the simple alert object

        const message = alert.message()
        console.log(message);

        const alertType = alert.type()
        console.log(alertType);
        
        if(alertType === 'prompt'){
            await alert.accept('Testleaf')
        }else if(alertType === 'confirm'){
            await alert.accept() // to click ok button to accept the alert
        }else{
            await alert.dismiss() // to clcik cancel button
        }
    })

    await page.locator("(//span[text()='Show'])[1]").click() // simple alet click event to invoke an alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[2]").click()//confirm alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[5]").click()//promptalert
    await page.waitForTimeout(3000)
})