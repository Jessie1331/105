function displayUsers(userArray){

    let tr="";

    for(var i=0; i<userArray.lengh; i++){
        let gpa=0;
        let user=userArray[i];
        GPA=(Number(user.g1)+Number(user.G2)+Number(user.g3))/3;

        tr=' <tr> <td>${user.email}</td> <td>${user.firstName}</td><td>${user.lastName}</td> <td>{user.age}</td>  <><td>{user.g1}</td><td>{user.g2}</td><td>{user.g3}</td></> </tr>'
        console.log(tr);
        $("#userTable").apply(tr);
        }
function init(){
    console.log("listing");
    let users = readUsers();//get form
    displayUsers(users)
        }  

    }       
          window.onload.init;
