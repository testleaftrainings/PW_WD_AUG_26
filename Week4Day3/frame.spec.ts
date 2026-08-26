import test from "@playwright/test";

test('Learn frames using playwright',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')
    const allframes = page.frames() // return all frames present in the page
    //main page as top frame
    //all iframes( child + nested) [mainframe, frame1, frame2,frame3, frame4]
    console.log(allframes.length);
    
    for(let i =0; i<allframes.length; i++){
        const url = allframes[i].url()
        console.log(`the url of the page is ${url}`);
        
    }

    //index is not reliable
    //frame order may change -> leads to flaky tests

    const frame1 = allframes[1]
    await frame1.locator('#Click').click()
    await page.waitForTimeout(2000)
    console.log('frame1 is clicked');
    
    //nested frame ->using index we can directly switch to the nested frame
    const frame4 = allframes[4]
    await frame4.locator('#Click').click()
    await page.waitForTimeout(2000)
    console.log('frame4 is clicked');
    
})