class browser2{

    launchBrowser(){
        console.log('Browser launched');
        
    }
}

class LoginPage2 extends browser2{

    login(){
        console.log('Login done');
        
    }
}

class DashboardPage extends browser2{

    dashboard(){
        console.log('Dashboard opened');
        
    }
}

const obj2 = new DashboardPage()
obj2.dashboard()
obj2.launchBrowser()