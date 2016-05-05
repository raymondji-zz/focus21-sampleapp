const pretendEmail = "j"; //jeff_aramini@ihealthsolutions.net";

export default class ApiHelper {
    
    static createPromiseThatResolvesTo(resolveValue) {
        return new Promise(
            function(resolve, reject) {
                window.setTimeout(
                    function() {
                        resolve(resolveValue);
                    }, Math.random() * 1000 + 1000);
            });
    }
    
    static createPromiseThatRejectsTo(rejectValue) {
       return new Promise(
            function(resolve, reject) {
                window.setTimeout(
                    function() {
                        reject(rejectValue);
                    }, Math.random() * 1000 + 1000);
            });
    }
    
    static setApiUrl(url) {
        ApiHelper._apiUrl = url;
    }
    
	static makeLoginRequest(email, password) {
       if (email === pretendEmail &&
           password === "password") {
       	   return ApiHelper.createPromiseThatResolvesTo({
                id_token: "123456789.asdfg.qwerty"
            });
       } else {
           return ApiHelper.createPromiseThatRejectsTo({});
       }
	}
    
    static makeLogoutRequest() {
    }
    
    static verifyEmail(email) {
        if (email === pretendEmail) {
            return ApiHelper.createPromiseThatResolvesTo({
                name: "Jeffery Aramini",
                email: "jeff_aramini@ihealthsolutions.net",
                photoUrl: "../assets/images/jeff-copy@3x.png"   
            });
        } else {
            return ApiHelper.createPromiseThatRejectsTo({});
        }
    }
    
    static getUserApps() {
        return ApiHelper.createPromiseThatResolvesTo([
            { name: "Interop", photoUrl: "../assets/images/group-2@2x.png", appId: "1" },
            { name: "PHC Hub", photoUrl: "../assets/images/page-1@2x.png", appId: "2" },
            { name: "ImmuCast", photoUrl: "../assets/images/page-1.png", appId: "3" },
            { name: "Interop", photoUrl: "../assets/images/group-2@2x.png", appId: "4" },
            { name: "PHC Hub", photoUrl: "../assets/images/page-1@2x.png", appId: "5" },
            { name: "ImmuCast", photoUrl: "../assets/images/page-1.png", appId: "6" },
            { name: "Interop", photoUrl: "../assets/images/group-2@2x.png", appId: "7" },
            { name: "PHC Hub", photoUrl: "../assets/images/page-1@2x.png", appId: "8" },
            { name: "ImmuCast", photoUrl: "../assets/images/page-1.png", appId: "9" }
        ]);
    }
};

const API_URL = 'localhost:8080/api/';
ApiHelper.setApiUrl(API_URL);
