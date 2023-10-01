import axios from "axios";
class Userinfo{

    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset() / 60
    }

    async getIPFromAmazon() {
        fetch('https://ipapi.co/json/')
            .then((res) => res.json())
            .then( async (data) => {
                console.log("userInfo", data)
                const date = new Date().toLocaleString();
                const userData = {
                    date,
                    ...data,
                };
                // const userDataObject = JSON.stringify(userData);
                /* const result = await axios.post("https://portfoliobackend-p(roduction-efb2.up.railway.app/user-info/save", userData, {
                    headers: {"Content-type" : "application/json"}
                }); */

                const userDataJson = JSON.stringify(userData);
                const resp = await fetch("https://portfoliobackend-p(roduction-efb2.up.railway.app/user-info/save",
                    {
                        method: "POST",
                        body: userDataJson,
                        headers: {"Content-Type": "application/json"}
                    })
                console.log("res is", resp);
            });
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
            console.log("getting pos... promise");
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