function authenticate(user,pass){
    if(user==="admin"&& pass===1234){
        console.log("login succesfull")
    }
    else{
        console.log("invalid credentials")
    }


}
authenticate("admin",1234)
// authenticate(1234,"admins");

authenticate("admins",1234)



