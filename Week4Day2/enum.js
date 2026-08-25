"use strict";
//numberic enum
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["open"] = 0] = "open";
    browserStatus[browserStatus["closed"] = 20] = "closed";
    browserStatus[browserStatus["incognito"] = 21] = "incognito";
})(browserStatus || (browserStatus = {}));
console.log(browserStatus.incognito);
//string enum
var Environment;
(function (Environment) {
    Environment["DEV"] = "dev";
    Environment["QA"] = "Qa";
    Environment["PROD"] = "prod";
})(Environment || (Environment = {}));
function launchApp(env) {
    console.log('Launching in ' + env);
}
launchApp(Environment.QA);
//Heterogeneous enum
var testValue;
(function (testValue) {
    testValue[testValue["passed"] = 0] = "passed";
    testValue[testValue["add"] = 1] = "add";
    testValue["failed"] = "fail";
    testValue["skipped"] = "skipped";
    testValue[testValue["retry"] = 78] = "retry";
    testValue[testValue["only"] = 79] = "only";
})(testValue || (testValue = {}));
console.log(testValue.only);
console.log(testValue);
