//properties =>data
//methods => actionables


class Employee{

    //properties of the class

    empName: string
    empId : string

    //parameterized constructor
    constructor(name:string, id:string){ 
        //by using local variable name and id we are assigning value for the properties
        console.log('Constructor is executing');
        
        this.empName = name
        this.empId = id
    }
    
    //method
    printEmployeeDetails(){
console.log(`Employee Name: ${this.empName}`);
console.log(`Employee id: ${this.empId}`);


    }

    //method with parameter

    updateEmployee(ename:string, eid:string){
this.empName = ename
this.empId = eid


     }

     empDetails(){
        //this.updateEmployee
        console.log(`Updated emp name: ${this.empName}`);
console.log(`Updated emp id: ${this.empId}`);
        
     }


}

const emp = new Employee("yuva","Emp345")

//accessing property
console.log(emp.empName);
console.log(emp.empId);

//calling method
emp.printEmployeeDetails()

//calling parameter method 
emp.updateEmployee('Hari','Emp123')

emp.empDetails()

