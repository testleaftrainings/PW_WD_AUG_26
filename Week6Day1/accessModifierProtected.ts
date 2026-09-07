import { EmployeeSignup } from "./accessModifier";

class HR extends EmployeeSignup{

    dept : string //property that is specific to HR class

    constructor(){
        super('yuva')
this.dept='QA'
    }
empUpdate(){
    console.log(this.ePhno , this.dept);
    
}

}
const hr = new HR()
hr.empUpdate()

//hr.printDetails()