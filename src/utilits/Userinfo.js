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
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
        return pos;
    }

    dataCookies(){
        return decodeURIComponent(document.cookie.split(";"))
    }

    dataStorage(){
        return localStorage
    }
}

export default Userinfo;