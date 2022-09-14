import {UilFacebook, UilInstagram, UilTwitter} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'

export default function Footer() {
    return(
       <footer className={css.container}>
            <div className={css.social}>
               <a href="https://twitter.com/"  target="_blank"> <UilTwitter  size={30}/></a>
               <a href="https://instagram.com/" target="_blank"><UilInstagram size={30}/></a>
               <a href="https://facebook.com/" target="_blank"><UilFacebook size={30}/></a>
            </div>
                <h5> &copy; Doze Pizza</h5>
       </footer>
    )}