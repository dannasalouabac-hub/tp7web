const inputname=document.getElementById("name");
const inputemail=document.getElementById("email");
const inputpassword=document.getElementById("password");
const inputage=document.getElementById("age");
const submit=document.getElementById("button");

console.log(inputname);
console.log(inputemail);
console.log(inputpassword);
console.log(inputage);
console.log(submit);


submit.addEventListener("click",function(event){
    event.preventDefault();
    console.log("button clicked");
    console.log("name:"+ inputname.value);
    console.log("email:"+ inputemail.value);
    console.log("password:"+ inputpassword.value);
    console.log("age:"+ inputage.value);


    alert("name:"+ inputname.value +"\n"+"email:"+ inputemail.value +"\n"+"password:"+ inputpassword.value +"\n"+"age:"+ inputage.value);
});