let test = "A constant variables"
test ="modified  contetenttttt"
document.getElementById('first').innerHTML=test
function sampleFn(){
  let valueOne = parseInt(document.getElementById("inputOne").valueOne)
  let valuetwo = parseInt(document.getElementById("inputtwo").valuetwo)
  console.log(valueOne + valuetwo)
  document.getElementById("result"),innnerText = valueOne + valuetwo
}
sampleFn()       


function login(){
    let username =document.getElementById("username").value
    let password =document.getElementById("password").value
    if( username === "admin" && password === "admim"){
        document.location.replace("./a.html")
    }else{
        alert("Wrong credentials")
    }
}