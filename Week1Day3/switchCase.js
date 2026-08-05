
//switch statement is a condictional statment that executes one block of code from
// multiple options based on the value of an expression

let alertType = 'confirm'

switch(alertType){
    case 'simple':
        console.log('Am a simple alert');
        break

        case 'confirm':
            console.log('Am confirm alert');
            break
            case 'prompt':
                console.log('prompt alert');
                break
                default:
                    console.log('invalid alert')            
        
}

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */