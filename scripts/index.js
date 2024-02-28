let itemsContainerElement = document.querySelector('.items-container')//elemetn cha class select kela


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
    <button class="btn-add-bag">Add to Bag</button>
    </div>`
})

itemsContainerElement.innerHTML = innerHTML;