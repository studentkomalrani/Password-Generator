let inputSlider= document.getElementById("inputSlider");
let slidervalue=document.getElementById("slidervalue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

slidervalue.textContent= inputSlider.value;
inputSlider.addEventListener('input',()=>{
 slidervalue.textContent= inputSlider.value;
})

genBtn.addEventListener('click', ()=>{
    passBox.value=generatePassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="~!@#$%^&*()_+|"


//Function to Generate Password

function generatePassword(){
   let genPassword=" ";
   let allChars="";


   allChars += lowercase.checked ? lowerChars:"";
   allChars += uppercase.checked ? upperChars:"";
   allChars += numbers.checked ? allNumbers:"";
   allChars += symbols.checked ? allSymbols:"";

   if(allChars == "" || allChars.length == 0){
     return genPassword;
   }

   let i=1;
   while(i<=inputSlider.value){
     genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
     i++;
   }
     
   return genPassword;
   
}

copyIcon.addEventListener('click', ()=>{

    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title= "Password Copied";

        setTimeout(() =>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";
        }, 3000)
    }
    
});