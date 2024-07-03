let user = prompt("username");
let pass = prompt("password");

if(!user && !pass ){alert("username and password is required")}
else if(!user){alert("username is required")}
 else if(!pass){alert("password is required")}
 else if(user == "admin" && pass == "1234" || user == "john" && pass == "qwerty" ){
    alert(`Hello ${user}`)}
else{alert("invalid username or password");}


console.log(`username : ${user}`)
console.log(`password : ${pass}`)
