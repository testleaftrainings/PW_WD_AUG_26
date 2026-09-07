export class EmployeeSignup{

    public eName:string
    public static eid : string
    protected readonly ePhno : number
    private eSalary : number

    constructor(ename1:string){// first the special method constructor is invoked while creating an object of the class

        console.log('Am a default constructor');
        
        this.eName =
        EmployeeSignup.eid = 'Emp123'
        this.ePhno = 687786
        this.eSalary = 45689
    }

    printDetails(){
        console.log(`The emp details ${this.eName} : ${EmployeeSignup.eid} :
             ${this.ePhno} : ${this.eSalary}`);
        
    }

    public get readData(){// this block is to read data of private accessmodifier property
        return this.eSalary
    }

    public set writeData(newSal:number){// this block is to write/modify data of private accessmodifier property
 this.eSalary =newSal
     }

}

// const emp1 = new EmployeeSignup()
// console.log(EmployeeSignup.eid);
// emp1.printDetails()

//console.log(emp1.readData);
//emp1.writeData=898989
//console.log(emp1.readData);


