//state management of the pizza cart
import create from "zustand"

export const useStore = create(
    (set)=>({
        //cart that will contain array pizzas
        cart:{
            pizzas:[]
        },

        //add an item to the cart
        addPizza:(data)=>
        set((state)=>({
            cart:{
                pizzas:[...state.cart.pizzas, data]
            }
        })),

        //remove one item from the cart
        removePizza:(index)=>
        set((state)=>({
            cart:{
                //return all the pizzas without the selected one (the one to be removed from cart)
                 pizzas: state.cart.pizzas.filter((_pizzas , i) => i !=index)
            }
        })),

        //remove all items from the cart
        clearCart: ()=>{
            set(()=>({
                cart:{
                    pizzas:[]
                }
            }))
        }
    })
)
