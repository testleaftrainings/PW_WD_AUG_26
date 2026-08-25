//union type


type userInput = string | number | boolean 
//userInput is the new customized alias name of the 3 datatypes combined together

let userName :userInput = 'support@testleaf.com'

userName = 809678988
userName = true
//console.log(userName);

//alias name for values

type supportedBrowser = 'chrome'| 'firefox' | 'msedge'


function invokeBrowser(browserName:supportedBrowser){
    console.log(browserName);
    
}

//nvokeBrowser('safari')
invokeBrowser('firefox')

//intersection --> &

type admin={
    adminName : string,
    privilege :string
}

type employee ={
    name : string,
    empId : number,
    date : string
}

type QA = admin & employee

const QAProfile : QA ={ // QAprofile is the object and QA is the type that is explicite inference
    adminName : 'Testleaf',
    privilege : 'server',
    name: 'Yuvarani',
    empId : 10001,
    date :'25/08/26'

}

console.log(QAProfile.adminName);
console.log(QAProfile.privilege);
//console.log(QA.);



