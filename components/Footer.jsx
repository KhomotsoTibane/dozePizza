import {UilFacebook, UilInstagram, UilTwitter} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'

export default function Footer() {
    return(
       <footer className={css.container}>
            <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
                <UilTwitter/>
                <UilInstagram/>
                <UilFacebook/>
            </div>
       </footer>
    )}