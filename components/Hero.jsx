import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero() {
    return (
        <div className={css.container}>
            {/*********left side*******/}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>Faster than ever</span>
                    <Image src={Cherry} alt="" width={40} height={25}/>
                </div>
                <div className={css.heroText}>
                    <span>Best <span style={{color:"var(--themeRed)"}}>Pizza </span></span>
                    <span>in Mamelodi</span>
                    <span>with free delivery </span>
                </div>
                <span className={css.miniText}>
                    Our mission is to make sure our tasty pizza is delivered to you for you enjoyment
                </span>
                <button className={`btn ${css.btn}`}>Order now</button>
            </div>

            {/*********right side*******/}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout='intrinsic'/>
                </div>

                <div className={css.contactUs}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color='white'/>
                    </div>
                </div>

                <div className={css.pizza}>
                    <div>
                        <Image src={Pizza1} alt='' objectFit='cover' layout='intrinsic'/>
                    </div>

                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span>R99.99</span>
                    </div>
                </div>
            </div>
        </div>
    )}