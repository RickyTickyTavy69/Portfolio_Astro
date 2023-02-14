class Userinfo{

    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset() / 60
    }

    pageon(){
        return window.location.pathname; // location of the file
    }

    referrer(){
        return document.referrer;
    }

    previousSites(){
        return history.length;
    }

    browserInfo(){
        return navigator;
    }

    async position(){
        try{
            const pos = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            })
            return pos;
        }catch(e){
            console.log("error getting location", e);
        }
        
    }

    dataCookies(){
        return decodeURIComponent(document.cookie.split(";"))
    }

    dataStorage(){
        return localStorage
    }
}

export default Userinfo;