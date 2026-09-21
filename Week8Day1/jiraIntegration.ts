import axios from "axios";


let endpoint = 'https://testleaf-team-qhgf7v1c.atlassian.net/rest/api/2/issue'
let userName = 'yuvarani.sekar@testleaf.com'
let token = 'ATATT3xFfGF0TTgwafGbNfsW5kZxX4IeUDy5OG1ia0Hoi7JxyjWkygUM8yBUqMIWUu77iSokq31yxJ39YUtAMUhAB0jaomZCGmnjJP0lsooW8O54qVfMu9gXHxKv00xgWKpXKnAkke4LV7-EDRnN0bhisr1gU6LDHJ6f1IfqvMEjOHH-FjVepjc=36D8FA3F'
let keyId = 'PAW2'

export async function createIssue(summary:string, description:string) {

    //these value come dynamically from failed test

    const issueRequest =
    {
  "fields": {

"project": {
      "key": keyId
    },
    "issuetype": {
      "name": "Bug"
    },
    "summary":summary,
    "description":description
  }
}

await axios.post(endpoint,issueRequest,
    {
        auth:{
            //internally browser/API client encodes : Base64 
            username:userName,
            password:token
        },
        headers:{
            "Content-Type":"application/json"
        }
    }
)
    
}