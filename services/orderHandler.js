/*
-this function will be called in the create order modal
-it will which will make a req to to api/order
-then it will create an order in the sanity studio
- it will return an id of the created order 
*/

export const createOrder = async({name,phone,address,total,paymentMethod})=>{
    const res = await fetch('/api/order',{
        method: "POST",
        body:JSON.stringify({
            name:name,
            phone:phone,
            address:address,
            total:parseFloat(total),
            method:paymentMethod,
            status:1
        })
    })

    const id = await res.json()
    return id;
}