import { APIRequestContext } from "@playwright/test";

let acc_Token: any
let ins_url: any
let token_Type: any

let leadId: any

export async function generateToken(request:APIRequestContext) {//this local variable request is userdefined
    //is holding the request fixture value
    let tokenResponse = await request.post('https://orgfarm-d716fa5b16-dev-ed.develop.my.salesforce.com/services/oauth2/token',
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "client_credentials",
                    "client_id": "3MVG9dAEux2v1sLsRvdqMCBNvwP6WkblcP70V_xpRK5jeueAyURhV5.EcbUmH8rTcnkf0q2Ko.bpsQDul4vOG",
                    "client_secret": "926CE4EE9D6F27F1C1853ACCCAEE9A2902BC98C4848C7B6CEB2B1D936D48A5DD"
                }
                // Alt+Shift+f =>format document
            }
        )
        let responseBody = await tokenResponse.json()
        console.log(responseBody);

        acc_Token = responseBody.access_token
        ins_url = responseBody.instance_url
        token_Type = responseBody.token_type
}

export async function createLead(request:APIRequestContext) {
     const leadresponse = await request.post(`${ins_url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                },
                data: {
                    "Salutation": "ms",
                    "FirstName": "Usha",
                    "LastName": "Rani",
                    "Company": "Qeagle"
                }
            }
        )

        const leadResponseBody = await leadresponse.json()
        console.log(leadResponseBody);

        leadId = leadResponseBody.id
}

export async function fetchLead(request:APIRequestContext) :Promise<string> {
    const fetchResponse = await request.get(`${ins_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                }

            }
        )
        const fetchResponseBody = await fetchResponse.json()
        console.log(fetchResponseBody);

        return fetchResponseBody.LastName
}