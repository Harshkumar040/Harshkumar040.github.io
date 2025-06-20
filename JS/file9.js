//arrays 
//vimp


// const score=[2, 1, 7, 5,3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const score1=[7,8,9]
// const newScore=[...score, ...score1]
// console.log(newScore)

// const cart={
//     1: 5,
//     5: 3,
// };
// const newCart = ({ ...cart, 2: 1 });
// console.log(newCart);


// let cart = {};
// const products = [
//     {id: 1, name: "product1", price: 25},
//     {id: 2, name: "product2", price: 30},
//     {id: 3, name: "product3", price: 20}
// ];
// function addToCart(id) {   
//     cart = {...cart,[id]: 1};
// }
// addToCart(1);   
// addToCart(3);  
// console.log(cart);  


const products=[
    {id: 1, name: 'product 1', price: 25},
    {id: 2, name: "product 2", price: 30},
    {id: 3, name: "product 3", price: 45},

];
let cart={};
function addToCart(productId, quantity =1){
    const product =products.find(p=>p.id==productId);
    
}



