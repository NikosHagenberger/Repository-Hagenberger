function submitToServer(){
	var xmlhttp = new XMLHttpRequest();  
    var theUrl = "http://localhost:3000/people";
	
    var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	
	xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({
    "username": username,
    "password": password}));

    console.log("new user created!");
    document.getElementById("userCreated").innerHTML = username + " created! Go back to login.";

}
var loggedinUser;
var isLoggedin = false;




function login(){
    
    
    var request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/people', true);

    request.onload = function () {
        var isValid = false;

        var data = JSON.parse(this.response);
        var username = document.getElementById("username").value;
	    var password = document.getElementById("password").value;

        data.forEach(person => {
            if(username == person.username && password == person.password) {
                console.log(username + " is logged in!!!");
                document.getElementById("loggedIn").innerHTML = username + " is logged in!!!";
                document.getElementById("setUsername").innerHTML = username;
                loggedinUser = person.username;
                isLoggedin = true;
                
                isValid = true;
                //saveUser(username);
			    
		    }
        });
        
        if(isValid == false){
            console.log("incorrect username or password");
            document.getElementById("loggedIn").innerHTML = "incorrect username or password";
        }
        
    }

    request.send();

}

function saveUser(username){


    var request = new XMLHttpRequest();  
    var theUrl = "http://localhost:3000/loggedIn";

	//request.open('PUT', theUrl, true);  // true : asynchrone false: synchrone
    //request.setRequestHeader('Content-Type',  "application/json;charset=UTF-8");  
    //request.send(JSON.stringify({"username": username}));
    console.log("in save user");




    //request.open("POST", theUrl);  //post past
    request.open("DELETE", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send();
	//request.send(JSON.stringify({
    //"username": username,
    //"password": password}));
}
