import { RBIPolicy, RBIRegulations } from "./interface";

abstract class Basebank implements RBIRegulations, RBIPolicy{

    auditTranx(): void {
        console.log('Auditing all the accounts');
        
    }
    openAccount(): void {
        console.log('open account for 1000 applicants');
        
    }

    activateDebitCard(): void {
        console.log('Activate your debit card');
        
    }
    // activateATMCard(){

    // }

    abstract withdrawMoney(): void;//unimplemented method
    abstract interestRatePolicy(): number;
    
}

export class SBIbank extends Basebank{
 
    withdrawMoney(): void {
        console.log('withdrawal limit is 1000');
        
    }
//only have implemented methods
    interestRatePolicy(): number {
        return 5
    }

    depositMoney(){
        console.log('money deposited limit 100000');
        
    }

}

class HDFC extends Basebank{
    withdrawMoney(): void {
        console.log('withdrawal limit is 5000');
        
    }
//only have implemented methods
    interestRatePolicy(): number {
        return 7
    }
    depositMoney(){
        console.log('money deposited limit 200000');
        
    }

}

class Axis extends Basebank{
    withdrawMoney(): void {
        console.log('withdrawal limit is 15000');
        
    }
    interestRatePolicy(): number {
        return 10
    }

    depositMoney(){
        console.log('Money deposited limit 300000');
        
    }
}


/* 
interface can have only => rules unimpletmented methods / method signature
abstract class => can have both implemented as well as unimplemented methods
class can have only implemented methods

we cant create object for both abstract class and interface*/