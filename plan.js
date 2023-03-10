export function plan(){
 const page2 = document.querySelector('.page2')
 const page4 = document.querySelector('.page4')
 const page2Btn = document.querySelector('.page2-btn')
 const page3 = document.querySelector('.page3')
 const finishTitle = document.getElementById('finish-title')
 const finishDesc = document.getElementById('finish-desc')
 const planPrcie = document.getElementById('plan-price')
 const totalP = document.querySelector('.total-p')
 const totalPrice = document.querySelector('.total-price')


 const span2 = document.querySelector('.span2')
 const span3 = document.querySelector('.span3')
 const span4 = document.querySelector('.span4')


let array = []
let pArray = []
 document.addEventListener('click',function(e){
 if(
        e.target.id === 'arcade' 
        || e.target.id === 'advanced' 
        || e.target.id === 'pro'
    )
    {
        toggleBg(e.target.id)
    }
      if(e.target.id  === 'service' || e.target.id === 'storage' || e.target.id === 'custom'){
        chooseAddOns(e.target.id)
    }
})

let pName = ''
let moOrYr = 'monthly'
let pPrice = ''


page2Btn.addEventListener('click',function(){
    if(pName === ''){
        alert('please select a plan')
    } else{
        span2.classList.remove('active')
        span3.classList.add('active')
        page3.style.display = 'block'
        page2.style.left = '-745px'
        page2.style.display='none'
        page3.style.left = '18px'
        finishTitle.textContent = `${pName} (${moOrYr})`
        planPrcie.textContent = pPrice
        totalPrice.textContent = pPrice
      
      
    }
    

})

function toggleBg(id){
    

    const planFlex = document.getElementsByClassName('plan-flex')

    for(const div of planFlex){
        div.classList.remove('bg')
    }

    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('bg')

    const planName = element.querySelector('.plan-h3')
    const price = element.querySelector('.p-price')
    pName = planName.textContent
    
   
    pPrice = price.textContent


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



function moOryr(){
   if(moOrYr === 'yearly'){
        p1.textContent = '$90/yr'
        p2.textContent = '$120/yr'
        p3.textContent = '$150/yr'
      
        p4.textContent = '+$10/yr'
        p5.textContent = '+$20/yr'
        p6.textContent = '+$20/yr'
        totalP.textContent = 'Total (per year)'
   }else{
        p1.textContent = '$9/mo'
    
        p2.textContent = '$12/mo'
        p3.textContent = '$15/mo'

        p4.textContent = '+$1/mo'
        p5.textContent = '+$2/mo'
        p6.textContent = '+$2/mo'
        totalP.textContent = 'Total (per month)'
   }
  
}
spanContainer.addEventListener('click',function(){
   const planFlex = document.getElementsByClassName('plan-flex')
   const addOnsFlex = document.getElementsByClassName('add-ons-flex')
   const inputs = document.querySelectorAll('input[type="checkbox"]')

   inputs.forEach(input => {
    if(input.checked){
     input.checked = false
    }
   })

    for(const div of planFlex){
        div.classList.remove('bg')
    }
     for(const div of addOnsFlex){
        div.classList.remove('bg')
    }
    array = []
    pArray = []
    pName = ''

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
   
 
   
   
})
 

finishDesc.addEventListener('click',function(){
   
    page2.style.display ='block'
    page2.style.left = '23px'
    page4.style.display = 'none'
})

 // ---------

const addOnsArrayContainer = document.querySelector('.add-ons-array-container')
const addOnsArrayContainerPrice = document.querySelector('.add-ons-array-container-price')




function chooseAddOns(id){
    
    const element = document.getElementById(id).parentElement
    element.classList.toggle('bg')
    const nameOfAddOn = element.querySelector('.title')

    const p = element.querySelector('.p-price')
   
    
    
    if(element.classList.contains('bg')){
        array.push(nameOfAddOn.textContent)
        pArray.push(p.textContent)
    }else{
        const index = array.indexOf(nameOfAddOn.textContent)
        const index2 = pArray.indexOf(p.textContent)
        array.splice(index,1)
        pArray.splice(index2,1)
    
    }
    // console.log(array)
    // console.log(pArray)
  
    


    const renderArray = array.map(plan => {
        
         return `<p class="add-ons">${plan}</p>` 
    })
    const renderArray2 = pArray.map(price => {
     
        return `<p class="add-ons-price">${price}</p>`
    })
    

    addOnsArrayContainer.innerHTML = renderArray.join('')
    addOnsArrayContainerPrice.innerHTML = renderArray2.join('')
    // console.log(renderArray)
    // console.log(renderArray2)

}

}


