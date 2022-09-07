import {UilFacebook, UilInstagram, UilTwitter} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

export default function Footer() {
    return(
       <footer className={css.container}>
            <div className={css.social}>
                <UilTwitter  size={30}/>
                <UilInstagram size={30}/>
                <UilFacebook size={30}/>
            </div>
                <h5> &copy; Doze Pizza</h5>

       </footer>
    )}