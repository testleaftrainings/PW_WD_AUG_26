class chromeBrowser{

launchBrowser(){
    console.log('Chrome Browser');
    
}
}

class edgeBrowser extends chromeBrowser{

    launchBrowser(){
        console.log('Edge browser');
        
    }
}

class firefoxBrowser extends edgeBrowser{

    launchBrowser(){
        console.log('Firefox browser');
        
    }
}

const obj5 = new edgeBrowser()
obj5.launchBrowser()

const obj6 = new firefoxBrowser()
obj6.launchBrowser()