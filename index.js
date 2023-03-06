// FORM VALIDATION 
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page2Btn = document.querySelector('.page2-btn')
const page3 = document.querySelector('.page3')
const page3Btn = document.querySelector('.page3-btn')
let isFilled = false
form.addEventListener('submit',function(e){
    e.preventDefault()
    if(!isFilled){
        validateInputs()
     }else{
         //console.log('a')
        //  page2.style.display = 'block'
         page1.style.marginLeft = '-450px'
         page2.style.left = '18px'

         //page2.style.top = '31px'
     }

   

})

console.log(page2Btn)
page2Btn.addEventListener('click',function(){
    console.log('a')
    // page3.style.display = 'block'
    page2.style.left = '-745px'
    page3.style.left = '18px'
})


function error(inputElement,message){
 const inputContainer = inputElement.parentElement
 const errorDisplay = inputContainer.querySelector('.error')

 errorDisplay.textContent = message

 inputContainer.classList.add('error')
 inputContainer.classList.remove('success')
}

function success(inputElement){
 const inputContainer = inputElement.parentElement
 const errorDisplay = inputContainer.querySelector('.error')

 errorDisplay.textContent = ''

 inputContainer.classList.add('success')
 inputContainer.classList.remove('error')
}


function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

function validateInputs(){

 //getting the input feilds value and adding trim method to remove all white spaces that a string have
 const nameValue = name.value.trim()
 const emailValue = email.value.trim()
 const numberValue = number.value.trim()
//  writing tha validation conditions
 if(nameValue && emailValue && numberValue){
  isFilled = true
 }
 if(nameValue  === ''){
  error(name, 'Name is required')
 }else{
  success(name)
 }

 if(emailValue === ''){
 error(email , 'Email is required')
 }else if(!isValidEmail(emailValue)){
  error(email , 'Please Provide a Valid Email address')
 }else{
  success(email)
 }

 if(numberValue === ''){
  error(number , 'phone number is required')
 }

 
}



// ------------------------



document.addEventListener('click',function(e){
    if(
        e.target.id === 'arcade' 
        || e.target.id === 'advanced' 
        || e.target.id === 'pro'
    )
    {
        toggleBg(e.target.id)
    }

    else if(e.target.id  === 'service' || e.target.id === 'storage' || e.target.id === 'custom'){
        chooseAddOns(e.target.id)
    }
})
let pName = ''
function toggleBg(id){

    const planFlex = document.getElementsByClassName('plan-flex')

    for(const div of planFlex){
        div.classList.remove('bg')
    }

    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('bg')

    const planName = element.querySelector('.plan-h3')

    pName = planName.textContent
    console.log(pName)

}


const spanContainer = document.querySelector('.span-container');

const span = document.getElementById('span')
const monthly = document.getElementById('monthly')
const yearly = document.getElementById('yearly')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')
const p4 = document.querySelector('.p4')
const p5 = document.querySelector('.p5')
const p6 = document.querySelector('.p6')

let moOrYr = 'monthly'

function moOryr(){
   if(moOrYr === 'yearly'){
      p1.textContent = '$90/yr'
      p2.textContent = '$120/yr'
      p3.textContent = '$150/yr'
      p4.textContent = '+$10/yr'
      p5.textContent = '+$20/yr'
      p6.textContent = '+$20/yr'
   }else{
        p1.textContent = '$9/mo'
        p2.textContent = '$12/mo'
        p3.textContent = '$15/mo'
        p4.textContent = '+$1/mo'
        p5.textContent = '+$2/mo'
        p6.textContent = '+$2/mo'
   }
  
}
spanContainer.addEventListener('click',function(){
 
   span.classList.toggle('align-right')
   yearly.classList.toggle('denim')
   monthly.classList.toggle('denim')
   
   if(span.classList.contains('align-right')){
    moOrYr = 'yearly'
    moOryr()
  
   }else{
    moOrYr = 'monthly'
    moOryr()
  
   }
   console.log(moOrYr)
   
   if(moOrYr === 'monthly'){
        console.log('a')
    }
    else if(moOrYr === 'yearly'){
        console.log('v')
    }

})

// ------------------------------
const array = []



function chooseAddOns(id){

    const element = document.getElementById(id).parentElement
    element.classList.toggle('bg')
    const nameOfAddOn = element.querySelector('.title')


    if(element.classList.contains('bg')){
    array.push(nameOfAddOn.textContent)
    }else{
    const index = array.indexOf(nameOfAddOn.textContent)
    array.splice(index,1)
    }
    console.log(array)

    const p = element.querySelector('.p-price')
//  console.log(p)
}
