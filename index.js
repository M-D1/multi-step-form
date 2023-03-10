
import {plan} from "./plan.js"

// FORM VALIDATION 
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('tel')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page2Btn = document.querySelector('.page2-btn')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')
const page3Btn = document.querySelector('.page3-btn')
const page4Btn = document.querySelector('.page4-btn')

const page5 = document.querySelector('.page5')

const goBackToPage1 = document.querySelector('.go-back-to-page1')
const goBackToPage2 = document.querySelector('.go-back-to-page2')
const goBackToPage3 = document.querySelector('.go-back-to-page3')

// const finishTitle = document.getElementById('finish-title')
// const finishDesc = document.getElementById('finish-desc')
// const planPrcie = document.getElementById('plan-price')
// const addOnsArrayContainer = document.querySelector('.add-ons-array-container')
// const addOnsArrayContainerPrice = document.querySelector('.add-ons-array-container-price')


const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const span4 = document.querySelector('.span4')


// console.log(finishDesc)
// console.log(planPrcie)
// console.log(addOnsArrayContainer)
// console.log(addOnsArrayContainerPrice)
// console.log(goBackToPage2)
let isFilled = false
if(name.value && email.value && number.value){
    isFilled = true
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(name.value === '' || email.value == '' || number.value === ''){
        validateInputs()
    }   else{
         //console.log('a')
         span1.classList.remove('active')
         span2.classList.add('active')
         
         page2.style.display = 'block'
         page1.style.marginLeft = '-450px'
         page1.style.display='none'
         page2.style.left = '18px'

         //page2.style.top = '31px'
     }

   

})
goBackToPage1.addEventListener('click',function(){
    span1.classList.add('active')
    span2.classList.remove('active')
    page1.style.marginLeft = '24px'
    page1.style.display = 'block'
    page2.style.display = 'none'
})

goBackToPage2.addEventListener('click',function(){
    span2.classList.add('active')
    span3.classList.remove('active')
    page3.style.display = 'none'
    page2.style.left = '15px'
    page2.style.display ='block'
})

goBackToPage3.addEventListener('click',function(){
    span3.classList.add('active')
    span4.classList.remove('active')
    page4.style.display = 'none'
    page3.style.display = 'block'
    page3.style.left = '15px'
})
// console.log(page2Btn)
// page2Btn.addEventListener('click',function(){
//     if(pName === ''){
//         alert('please select a plan')
//     } else{
//         page3.style.display = 'block'
//         page2.style.left = '-745px'
//         page3.style.left = '18px'
//     }
//     console.log('a')

// })



page3Btn.addEventListener('click',function(){
    span3.classList.remove('active')
    span4.classList.add('active')
    console.log('a')
    page4.style.display ='block'
    page4.style.left='25px'

    page3.style.display = 'none'
})

page4Btn.addEventListener('click',function(){
    page5.style.display = 'block'
    page5.style.left = '22px'
    page4.style.display ='none'
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
//  if(nameValue && emailValue && numberValue){
//   isFilled = true
//  }
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
  error(number , `
    phone number is required 
  `)
 }else{
    success(number)
 }

 
}



// ------------------------

plan()
// let pName = ''
// let moOrYr = 'monthly'
// let pPrice = ''
// page2Btn.addEventListener('click',function(){
//     if(pName === ''){
//         alert('please select a plan')
//     } else{
//         page3.style.display = 'block'
//         page2.style.left = '-745px'
//         page3.style.left = '18px'
//         finishTitle.textContent = `${pName} (${moOrYr})`
//         planPrcie.textContent = pPrice
//         // console.log(pName)
//         // console.log(moOrYr) 
//         // console.log(pPrice)
//     }
//     console.log('a')

// })
document.addEventListener('click',function(e){
    // if(
    //     e.target.id === 'arcade' 
    //     || e.target.id === 'advanced' 
    //     || e.target.id === 'pro'
    // )
    // {
    //     toggleBg(e.target.id)
    // }

    //  if(e.target.id  === 'service' || e.target.id === 'storage' || e.target.id === 'custom'){
    //     chooseAddOns(e.target.id)
    // }
})


// function toggleBg(id){

//     const planFlex = document.getElementsByClassName('plan-flex')

//     for(const div of planFlex){
//         div.classList.remove('bg')
//     }

//     const element = document.getElementById(id)
//     console.log(element)
//     element.classList.add('bg')

//     const planName = element.querySelector('.plan-h3')
//     const price = element.querySelector('.p-price')
//     pName = planName.textContent
   
//     pPrice = price.textContent

// }


// const spanContainer = document.querySelector('.span-container');

// const span = document.getElementById('span')
// const monthly = document.getElementById('monthly')
// const yearly = document.getElementById('yearly')
// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')
// const p3 = document.querySelector('.p3')
// const p4 = document.querySelector('.p4')
// const p5 = document.querySelector('.p5')
// const p6 = document.querySelector('.p6')



// function moOryr(){
//    if(moOrYr === 'yearly'){
//       p1.textContent = '$90/yr'
//       p2.textContent = '$120/yr'
//       p3.textContent = '$150/yr'
//       p4.textContent = '+$10/yr'
//       p5.textContent = '+$20/yr'
//       p6.textContent = '+$20/yr'
//    }else{
//         p1.textContent = '$9/mo'
//         p2.textContent = '$12/mo'
//         p3.textContent = '$15/mo'
//         p4.textContent = '+$1/mo'
//         p5.textContent = '+$2/mo'
//         p6.textContent = '+$2/mo'
//    }
  
// }
// spanContainer.addEventListener('click',function(){
 
//    span.classList.toggle('align-right')
//    yearly.classList.toggle('denim')
//    monthly.classList.toggle('denim')
   
//    if(span.classList.contains('align-right')){
//     moOrYr = 'yearly'
//     moOryr()
  
//    }else{
//     moOrYr = 'monthly'
//     moOryr()
  
//    }
   
 
   
   
// })
 

// finishDesc.addEventListener('click',function(){
//     console.log('a')
//     page2.style.display ='block'
//     page2.style.left = '23px'
//     page4.style.display = 'none'
// })
// ------------------------------
// const array = []
// const pArray = []



// function chooseAddOns(id){
    
//     const element = document.getElementById(id).parentElement
//     element.classList.toggle('bg')
//     const nameOfAddOn = element.querySelector('.title')

//     const p = element.querySelector('.p-price')
    
//     if(element.classList.contains('bg')){
//         array.push(nameOfAddOn.textContent)
//         pArray.push(p.textContent)
//     }else{
//         const index = array.indexOf(nameOfAddOn.textContent)
//         const index2 = pArray.indexOf(p.textContent)
//         array.splice(index,1)
//         pArray.splice(index2,1)
    
//     }
  
//     console.log(pArray)
  
    


//     const renderArray = array.map(plan => {
//          return `<p class="add-ons">${plan}</p>` 
//     })
//     const renderArray2 = pArray.map(price => {
//         return `<p class="add-ons-price">${price}</p>`
//     })
    

//     addOnsArrayContainer.innerHTML = renderArray.join('')
//     addOnsArrayContainerPrice.innerHTML = renderArray2.join('')
//     // console.log(renderArray)
//     console.log(renderArray2)

// }



