const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let length=15
const passwordOne = document.getElementById("password1")
const passwordTwo = document.getElementById("password2")
const btn = document.querySelector(".btn")





function createPasswordOne(){
    let password=''
    while(length>password.length){
        password+= characters[Math.floor(Math.random()*characters.length)]
    }
    console.log(passwordOne)
    passwordOne.value = password
    
    
}
function createPasswordTwo(){
    let password=''
    while(length>password.length){
        password+= characters[Math.floor(Math.random()*characters.length)]
    }
    console.log(passwordTwo)
    passwordTwo.value = password
    
    
}
console.log("deepak")


btn.addEventListener("click",()=>{
     createPasswordOne()
     createPasswordTwo()
})