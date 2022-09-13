import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../assets/r.png'
// import Logo from '../assets/plogo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link'

export default function Header() {

    const cartItems = useStore((state)=> state.cart.pizzas.length)
    return(
        <header className={css.header}>
           <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Doze Pizza</span>
           </div>
            <ul className={css.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contact</a></li>
            </ul>
           <div className={css.rightSide}>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color='#2e2e2e'/>
                        <div className={css.badge}>{cartItems}</div>
                    </div>
                </Link>
           </div> 
        </header>
    )}