let add = document.querySelectorAll('.add')
let item = document.querySelector('.item-card')
let total = []
let totalCart = document.querySelector('.total')


for (let i = 0 ; i < add.length ; i++){

    add[i].addEventListener('click', addTOCart)

}


function addTOCart(event) {

 let btn = event.target
 let shop = btn.parentElement.parentElement
 let name = shop.querySelector('.title').innerText
 let price = shop.querySelector('.price').innerText
 let imgSrc = shop.querySelector('.img-card').src
 
 console.log (name , price , imgSrc)

 addToModal (name , price , imgSrc)

 total.push( parseFloat(price))
 console.log(calculTotal())
 addQuantity()

}



 function addToModal (name , price , imgSrc){


     item.innerHTML += `
     <div class="row mt-3 ">
     <div class="col-md-3">
       <img src="${imgSrc}" class="img" >
     </div>
     <div class="col-md-2">
       <strong>${name}</strong>
     </div>
     <div class="col-md-3">
       <strong>${price}</strong>
     </div>
     <div class="col-md-2">
       <span>1</span>
     </div>
     <div class="col-md-2">
     <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
     </div>
   </div>`
     
     
}

function addQuantity () {
  totalCart.innerHTML = `
  <div class="pos">
  <h4>Total Price </h4> 
  <h4>${calculTotal()} Dt</h4>
  </div>
  `
}

function calculTotal(){

    return total.reduce((a,b) => (a+b) )
}