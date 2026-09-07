class browser{

    browserName : string = 'Chrome'

    lauchBrowser(){
        console.log('Browser launched');
        
    }
}

class LoginPage extends browser{

    login(){
        console.log('login successful');
        
    }
}

const single = new LoginPage()
console.log(single.browserName);
single.lauchBrowser()
single.login()
