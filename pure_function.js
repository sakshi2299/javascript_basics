//this is a pure function
function calculateGST (product_price){
    return product_price*0.05;

}
console.log(calculateGST(20))
//this is not a pure function as it depends on external variable tax
let tax=20;
function calculateGSTIncludingTax(price){
    return price*(tax/100)+price;

}
console.log(calculateGSTIncludingTax(20))
