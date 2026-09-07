class browser3{

    openBrowser(){
        console.log('browser opened');
        
    }

}

class LoginPage3 extends browser3{

    login(){
        console.log('Login success');
        
    }
}

class HomePage3 extends LoginPage3{

    searchProduct(){
        console.log('product searched');
        
    }

    
}

class reportsPage extends browser3{

    report(){
        console.log('report opened');
        
    }
}

const homeObj = new HomePage3()
homeObj.login()
homeObj.openBrowser()
homeObj.searchProduct()

const reportObj = new reportsPage()
reportObj.openBrowser()
reportObj.report()