

let cartData={
    items:[
        {name:"Shirt", price:500,quantity:2},
        {name:"Pants", price:2500,quantity:1},
        {name:"Shoes", price:3000,quantity:3},
        {name:"Hat", price:300,quantity:4}
    ]
}


cartData.items.sort((a,b)=>{
    return a.name.localeCompare(b.name);

});
cartData.items.sort((a,b)=>{
    return a.price - b.price;
});
cartData.items.sort((a,b)=>{
    return b.price - a.price;
})
let arr_filter = cartData.items.filter(item => item.price > 2000);
console.log(cartData);
console.log(arr_filter);
