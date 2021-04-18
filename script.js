let add = document.querySelectorAll('.add')
let quantity = 1
let soustotal = 0

let item = document.querySelector('.item-card')
let incrementBtn = document.querySelector('.incQ')
let decrementBtn = document.querySelector('.decQ')
let total = []
let totalProduit = []
let isItExist = []
let totalCart = document.querySelector('.total')

let incQty = document.querySelectorAll('.incQ')
let decQty = document.querySelectorAll('.deccQ')

for (let i = 0 ; i < add.length ; i++) {

  add[i].addEventListener('click', addTOCart)

}


function addTOCart(event) {

 let btn = event.target
 let shop = btn.parentElement.parentElement
 let name = shop.querySelector('.title').innerText
 let price = shop.querySelector('.price').innerText
 let imgSrc = shop.querySelector('.img-card').src 

 totalProduit.push(parseFloat(price)*quantity)
console.log(total)
addToModal (name , price , imgSrc  )

 AfficherTotal ()
}



 function addToModal (name , price , imgSrc){
quantity++
console.log(soustotal)
   // On ajouter condition pour ne dupliquer pas le produit
  if((isItExist.length==0)||(!isItExist.includes(name))){
    item.innerHTML+=`
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
     <div class="col-md-2 d-flex" >
     <button class="decQ" onclick="decrement()">-</button>
     <span class="qq">${quantity}</span>
     <button class="incQ" onclick="increment()">+</button>
     </div>
     <div class="col-md-2">
     <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
     </div>
   </div>
   <h3>${totalProduit[totalProduit.length-1]}</h3>
     `
     isItExist.push(name)
    } else  {
"Erreur lors le remplissage du panier "
    }

}



// Affichage le total de panier dans le modal
function AfficherTotal (){
  totalCart.innerHTML = `<h4> : hahahaha ${calculTotal()}</h4>`
}


// Increment quantity
function increment(price){
 quantity++
  document.getElementsByClassName("qq")[0].innerHTML = `${quantity}`;

}
// Decrement quantity
function decrement(price){
  quantity>1&&quantity--
document.getElementsByClassName("qq")[0].innerHTML = `${quantity}`;

}


// Type de retour : Number
function calculTotal(){
  return total.reduce((a,b) => (a+b) )
}

