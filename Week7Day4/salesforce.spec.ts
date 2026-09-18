import test, { expect } from "@playwright/test";

let acc_Token: any
let ins_url: any
let token_Type: any

let leadId: any

test.describe.serial('Run in serial mode', async () => {


    test('Generate access token', async ({ request }) => {
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

    })
    test('Create lead using playwright with API', async ({ request }) => {
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

        console.log(leadresponse.status());
        console.log(leadresponse.statusText());

        expect(leadresponse.status()).toBe(201)
        expect(leadresponse.statusText()).toBe('Created')

        leadId = leadResponseBody.id

    })

    test('Fetch lead using playwright with API', async ({ request }) => {
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

        console.log(fetchResponse.status());
        console.log(fetchResponse.statusText());

        expect(fetchResponse.status()).toBe(200)
        expect(fetchResponse.statusText()).toBe('OK')

    })

    test('Update lead using playwright with API', async ({ request }) => {
        const UpdateResponse = await request.patch(`${ins_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                },
                data: {
                    "Company": "Testleaf"
                }

            }
        )
        // const updateresponseBody = await UpdateResponse.json()
        // console.log(updateresponseBody);

        console.log(UpdateResponse.status());
        console.log(UpdateResponse.statusText());

        expect(UpdateResponse.status()).toBe(204)
        expect(UpdateResponse.statusText()).toBe('No Content')

    })
test('Delete lead using playwright with API', async ({ request }) => {
        const deleteResponse = await request.delete(`${ins_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token_Type} ${acc_Token}`
                }

            }
        )
        // const fetchResponseBody = await fetchResponse.json()
        // console.log(fetchResponseBody);

        console.log(deleteResponse.status());
        console.log(deleteResponse.statusText());

        expect(deleteResponse.status()).toBe(204)
        expect(deleteResponse.statusText()).toBe('No Content')

    })


})