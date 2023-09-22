
   const KEY = "users";


function saveUser(user){
    let users = readUsers();
  
    users.push(user);
    let val = JSON.stringify(users);
  
    localStorage.setItem(KEY,val);

}





function readUsers(){
    let data = localStorage.getItem(KEY);
    if(!data){//not data?
        return[];//creating array

    } else {
        let usersList=JSON.parse(data);

        return usersList;
    }
}