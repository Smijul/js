const cart=["pant","Tshirt","kurta"]
const promise=creatOrder(cart)

function creatOrder(cart){
    const pr=new Promise(function (resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("cart is not valid");
            reject(err)
        }
        const orderId="123";
        if(orderId){
            resolve(orderId)
        }
    });
    return pr;
}

promise.then(function(OrderID){
    console.log(OrderID);
});

function validateCart(cart){
    return true;
}