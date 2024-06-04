
const inputSlider = document.querySelector("#myRange")
const lenghtDisplay = document.querySelector('.password-length')
const indicator1 = document.querySelector('.strenght-icon')
const passwordDisplay = document.querySelector('#password-display')
const copyButton = document.querySelector('.copy-btn')
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const generateButton = document.querySelector(".generatepassword")

//  make rest variables


let password = ''
let passwordLenght = 10;
let checkCount = 0


function handleSlider (){
    inputSlider.value = passwordLenght
    lenghtDisplay.innerText = passwordLenght

}

handleSlider()

function setIndicator(color) {
    console.log(color);
    console.log(indicator1);
    indicator1.style.backgroundColor = color
}

function getRndInteger(min, max){
    return(Math.floor(Math.random()*(max-min))+min)
}
function generateNumber(){
    return(getRndInteger(0,9))
}

function generateUpperCase(){
    return( String.fromCharCode((getRndInteger(65,90))))
}


function generateLowerCase(){
    return( String.fromCharCode((getRndInteger(97,122))))
}

function generateSymbol(){
    const symbols = '!@#$%^&*(){}[];:_+-|=<>/,.'
    return symbols[getRndInteger(0, symbols.length)]
}

const calStrength =(passsword) =>{
let hasUpper = false
let hasLower = false
let hasSymbol = false
let hasNumber = false

for (let i = 0; i < passsword.length; i++){
    if (passsword[i]>'A' && passsword[i]<'Z'){
        hasUpper = true
    }else if(passsword[i]>'a' && passsword[i]<'z'){
        hasLower = true
    }
    else if(passsword[i]>'0' && passsword[i]<'9'){
        hasNumber = true
    }else {
        hasSymbol = true
    }
    
}

if(hasUpper && hasLower && (hasSymbol || hasNumber) && passsword.length>8){
    setIndicator('#0f0')
}

else if((hasUpper && hasLower) || (hasNumber && hasSymbol) && passsword.length>6){
    setIndicator('#ff0')
}
else{
    setIndicator('#f00')
}

}


 function copyContent(){
    navigator.clipboard.writeText(passwordDisplay.value);
    alert("copied")
}


copyButton.addEventListener('click', copyContent)


inputSlider.addEventListener('input', (e)=>{
    passwordLenght = e.target.value
    lenghtDisplay.innerText = passwordLenght
})


function handleCheckBoxes(input){
    checkCount = 0
    for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkCount++
        }
    }
}


generateButton.addEventListener('click', (e)=>{

    if(checkCount==0)
    return;
    let password = ''
    let func_array = []
    
    if(uppercaseCheck.checked){
        func_array.push(generateUpperCase)
        password += generateUpperCase()
    }
    if(lowercaseCheck.checked){
        func_array.push(generateLowerCase)
        password += generateLowerCase()
    }
    if(numbersCheck.checked){
        func_array.push(generateNumber)
        password += generateNumber()
    }
    if(symbolsCheck.checked){
        func_array.push(generateSymbol)
        password += generateSymbol()
    }

    for (let i=0; i< passwordLenght-checkCount; i++){
        let randomIndex = getRndInteger(0,checkCount)
        password += func_array[randomIndex]()
    }
    passwordDisplay.value = password

    calStrength(password)
})




// const inputSlider = document.querySelector("#myRange")
// const lenghtDisplay = document.querySelector('.password-length')
// const indicator = document.querySelector('.strenght-icon')
// const passwordDisplay = document.querySelector('#password-display')
// const copyButton = document.querySelector('.copy-btn')
// const checkboxes = document.querySelectorAll('input[type="checkbox"]')
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const generateButton = document.querySelector(".generatepassword")

// //  make rest variables


// let password = ''
// let passwordLenght = 10;
// let checkCount = 0


// function handleSlider (){
//     inputSlider.value = passwordLenght
//     lenghtDisplay.innerText = passwordLenght
// }
// handleSlider()

// function setIndicator(color) {
//     indicator.style.backgroundColor = color
// }

// function getRndInteger(min, max){
//     return(Math.floor(Math.random()*(max-min))+min)
// }

// // console.log(getRndInteger(10,19))

// function generateNumber(){
//     return(getRndInteger(0,9))
// }

// function generateUpperCase(){
//     // console.log( String.fromCharCode((getRndInteger(65,90))))
//     return( String.fromCharCode((getRndInteger(65,90))))
// }
// // generateUpperCase()

// function generateLowerCase(){
//      return( String.fromCharCode((getRndInteger(97,122))))
// }

// //expalin code 

// // /**
// //  * Generates a random symbol from a predefined list of symbols.
// //  * @returns {string} A randomly selected symbol from the predefined list.
// //  */

// function generateSymbol(){
//     const symbols = '!@#$%^&*(){}[];:_+-|=<>/,.'
//     return symbols[getRndInteger(0, symbols.length)]   
// }


// const calStrength =(passsword) =>{
// let hasUpper = false
// let hasLower = false
// let hasSymbol = false
// let hasNumber = false

// for (let i = 0; i < passsword.length; i++){
//     if (passsword[i]>'A' && passsword[i]<'Z'){
//         hasUpper = true
//     }else if(passsword[i]>'a' && passsword[i]<'z'){
//         hasLower = true
//     }
//     else if(passsword[i]>'0' && passsword[i]<'9'){
//         hasNumber = true
//     }else {
//         hasSymbol = true
//     }
    
// }

// if(hasUpper && hasLower && (hasSymbol || hasNumber) && passsword.length>8){
//     setIndicator('#0f0')
// }

// else if((hasUpper && hasLower) || (hasNumber && hasSymbol) && passsword.length>6){
//     setIndicator('#ff0')
// }
// else{
//     setIndicator('#f00')
// }

// }


// async function copyContent(){
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     alert("copied")
// }

// copyButton.addEventListener('click', copyContent)

// //password length slider ke sath auto change hogi silider ko move krane pr
// inputSlider.addEventListener('input',(e)=>{
//     passwordLenght=e.target.value
//     handleSlider()  
// })

// function handleCheckBoxes(input){
//     checkCount = 0
//     for(let i=0; i<checkboxes.length; i++){
//         if(checkboxes[i].checked){
//             checkCount++
//         }
//     }
// }


// generateButton.addEventListener('click', (e)=>{

//     if(checkCount==0)
//     return;
//     let password = ''
//     let func_array = []
    
//     if(uppercaseCheck.checked){
//         func_array.push(generateUpperCase)
//         password += generateUpperCase()
//     }
//     if(lowercaseCheck.checked){
//         func_array.push(generateLowerCase)
//         password += generateLowerCase()
//     }
//     if(numbersCheck.checked){
//         func_array.push(generateNumber)
//         password += generateNumber()
//     }
//     if(symbolsCheck.checked){
//         func_array.push(generateSymbol)
//         password += generateSymbol()
//     }

//     for (let i=0; i< passwordLenght-checkCount; i++){
//         let randomIndex = getRndInteger(0,checkCount)
//         password += func_array[randomIndex]()
//     }
//     passwordDisplay.value = password

// calStrength(password)
// })
