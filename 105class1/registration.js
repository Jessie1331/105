


function user(email,password,fName,lName,age,g1,g2,g3){
    this.email = email;
    this.password = password;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.g1 = g1;
    this.g2 = g2;
    this.g3 = g3;
 

    
}
function validation(){//create validation
    inputEmail.classList.remove("alert-error");
    inputPassword.classList.remove("alert-error");
    inputFName.classList.remove("alert-error")
    input101.classList.remove("alert-error")
    input102.classList.remove("alert-error")
    input103.classList.remove("alert-error")
    
    if(aUser.email ===''){
        valid = false;
        inputEmail.classlist.add("alert-error");
    }
    if(aUser.password === '') {
        valid = false;
        inputpassword.classlist.add("alert-error");
    }
    if(aUser.fName === '') {
        valid = false;
        inputFirstName.classlist.add("alert-error");
    }
    
    if(aUser.g1 === '') {
        valid = false;
        inputG1.classlist.add("alert-error");
    }
    if(aUser.g2 === '') {
        valid = false;
        inputg2.classlist.add("alert-error");
    }
    if(aUser.g3 === '') {
        valid = false;
        inputg3.classlist.add("alert-error");
    }
    
    return validation;
    }
//getting the values from the inputs
function register(){
let inputEmail = document.$("#txtEmail").val();
let inputPassword = document.$("#txtPassword").val();
let inputFName = document.$("#txtFirstName").val();
let inputLName = document.$("#txtLastName").val();
let inputAge = document.$("#txtAge").val();
let inputg1 = document.$("#txtg1").val();
let inputg2 = document.$("#txtg2").val();
let inputg3 = document.$("#txtg3").val();

//create new user

let user = new User(inputEmail,inputPassword,inputFName,inputLName,inputg1,inputg2,inputg3);

saveUser(user);
}




function init(){
    //trigger the btn register
    $("#registerBtn").click(register);
}


Window.onload=init;

// function displayUsers(userArray){

//     let tr="";

//     for(var 1=0; i<userArray.lengh;; i++){
//         let gpa=0;
//         let user=userArray[i];
//         GPA=(Number{user.g1}+Number{user.G2}+Number{user.g3})/3;

//         tr=' <tr>                                                                      <td>${user.email}</td>                                                 <td>${user.firstName}</td>                                            <td>${user.lastName}</td>                                               <td>{user.age}</td>                                                     <td>{user.g1}</td>                                                     <td>{user.g2}</td>                                                      <td>{user.g3</td>                                                      <td>{user.gpa}</td>                                                      </tr>                                                                     '
//         console.log(tr);
//         ${"#userTable"}.append(tr);
//         }
// function in it(){
//     console.log("listing");
//     let users = read users();//get form
//     displayUsers(users)
//         }    window.onload=init;