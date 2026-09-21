import { TestInfo } from "@playwright/test";
import { createIssue } from "./jiraIntegration";

export async function logADefectInJira(testinfo:TestInfo) {
    
    if(testinfo.status==='failed' || testinfo.status === 'timedOut'){
        const summary = `Test ${testinfo.status} : ${testinfo.title}`
        const description = `Here is the error ${testinfo.error}`

        await createIssue(summary,description)

        console.log(`jira issue created for ${testinfo.status} : ${testinfo.title}`);
        console.log(`Error message : ${testinfo.error}`);
        
        
    }else{
        console.log('The test is passed successfully');
        
    }
}