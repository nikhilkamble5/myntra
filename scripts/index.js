let baagItems;

onLoad(); 
//web page load zhya wr ky load hoila pahije

function onLoad(){
    let  baagItemsStr=localStorage.getItem('bagItems');
    baagItems =baagItemsStr ? JSON.parse(baagItemsStr):[];
    displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId){
    baagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(baagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
//bag icon select kela 0 asel tr bag text hiddne hoil add kelya vr disel vr method call keli
    if(baagItems.length>0){
        bagItemCountElement.style.visibility='visible';

        bagItemCountElement.innerText=baagItems.length
     }
     else{
        bagItemCountElement.style.visibility='hidden';
     }
}

function displayItemsOnHomePage(){let itemsContainerElement = document.querySelector('.items-container')//elemetn cha class select kela

//konta pn item add kelya saglyana style apply zhali pahije 👇
let innerHTML =''; //empty html dila
items.forEach(item =>{
    // for each loop laun data retrive karaycha tyala html apply hoil
    innerHTML +=` <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">${item.rating.stars} ⭐ |${item.rating.count}</div>
    <div class="componey-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    
    
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="origonal-price">Rs ${item.origonal_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
})

itemsContainerElement.innerHTML = innerHTML;
}
