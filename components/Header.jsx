import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../assets/r.png'
import {UilShoppingBag, UilReceipt} from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {

    const [order, setOrder] = useState("")
    useEffect(() => {
      setOrder(localStorage.getItem("order"))  
    }, [])
    
    const cartItems = useStore((state)=> state.cart.pizzas.length)
    return(
        <header className={css.header}>
           <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Doze Pizza</span>
           </div>
            <ul className={css.menu}>
                <li><Link href="/">Home</Link></li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
           <div className={css.rightSide}>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color='#2e2e2e'/>
                        <div className={css.badge}>{cartItems}</div>
                    </div>
                </Link>

                {order && (
                    <Link href={`/order/${order}`}>
                        <div className={css.cart}>
                            <UilReceipt size={35} color='#2e2e2e'/>
                            {order !='' && 
                            <div className={css.badge}>1</div>
                            }
                           
                        </div>
                    </Link>
                )}
           </div> 
        </header>
    )}