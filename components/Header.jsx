import Image from 'next/image'
import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

export default function Header() {
    return(
        <header className={css.header}>
           <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Fudo</span>
           </div>
            <ul className={css.menu}>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contact</a></li>
            </ul>
           <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color='#2e2e2e'/>
                    <div className={css.badge}>1</div>
                </div>
           </div> 
        </header>
    )}