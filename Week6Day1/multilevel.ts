class browser1{

    openBrowser(){
        console.log('browser opened');
        
    }

}

class LoginPage1 extends browser1{

    login(){
        console.log('Login success');
        
    }
}

class HomePage extends LoginPage1{

    searchProduct(){
        console.log('product searched');
        
    }
}

const obj1 = new HomePage()
obj1.login()
obj1.openBrowser()
obj1.searchProduct()