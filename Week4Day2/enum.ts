//numberic enum

enum browserStatus {
    open,
    closed = 20,
    incognito
}

console.log(browserStatus.incognito);

//string enum

enum Environment{
    DEV = 'dev',
    QA = 'Qa',
    PROD = 'prod'
}

function launchApp(env:Environment){
    console.log('Launching in ' + env);
    
}

launchApp(Environment.QA)

//Heterogeneous enum

enum testValue{

    passed,
    add,
    failed = "fail",
    skipped = "skipped",
    retry = 'retry',
    only =7
}

console.log(testValue.only);
console.log(testValue);

