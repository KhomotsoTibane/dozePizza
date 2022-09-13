import Layout from "../components/Layout";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css"
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import { UilTimesCircle } from '@iconscout/react-unicons'
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart() {

    const CartData = useStore((state)=>state.cart)
    const removePizza = useStore((state)=> state.removePizza)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    //remove a pizza and send alert to user
    const handleRemove= (i)=>{
        removePizza(i)
        toast.error('Item removed')
    }

    const total=()=> CartData.pizzas.reduce((a,b)=> a+b.quantity * b.price, 0)

    const handleOnDelivery = () => {
        //0 is the index of the button responsible for payment on delivery
        setPaymentMethod(0);
        setIsOpen(true);

        //set local storage only when we have a browser window and not during server 
         typeof window !== 'undefined' && localStorage.setItem('total', total())
    }
    return(
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 &&
                                CartData.pizzas.map((pizza, i)=>{
                                    const src = urlFor(pizza.image).url()
                                    return (
                                        <tr key={i}>
                                            <td> 
                                                <Image 
                                                    loader={ ()=>src} 
                                                    src={src} 
                                                    alt='' 
                                                    objectFit='cover'
                                                    width={85} 
                                                    height={85} />
                                            </td>
                                            <td>{pizza.name}</td>
                                            <td>{pizza.size === 0 ? "Small" : pizza.size ===1 ? "Meduim" : "Large"}</td>
                                            <td>{pizza.price}</td>
                                            <td>{pizza.quantity}</td>
                                            <td>{pizza.price * pizza.quantity}</td>
                                            <td style={{
                                                color:'var(--themeRed)',
                                                cursor:'pointer'
                                                }}
                                                onClick={()=>handleRemove(i)}
                                                >
                                                <UilTimesCircle/>
                                            </td>
                                        </tr>
                                    )})
                            }
                        </tbody>
                    </table>
                </div>
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.cartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>

                        <div>
                            <span>Total </span><span>R {total()}</span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button className="btn" onClick={handleOnDelivery}>Pay on Delivery</button>
                        <button className="btn">Pay now</button>
                    </div>
                </div>
            </div>
            <Toaster/>

            {/* modal */}
            <OrderModal
                opened={isOpen}
                setIsOpen={setIsOpen}
                paymentMethod={paymentMethod}
            />
        </Layout>
    )
}