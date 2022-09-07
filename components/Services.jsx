import Image from 'next/image'
import css from '../styles/Services.module.css'
import Service1 from '../assets/s1.png'
import Service2 from '../assets/s2.png'
import Service3 from '../assets/s3.png'

export default function Services() {
    return(
        <>
           <div className={css.servicesText}>
                <span>What we serve</span>
                <span>Your Favourite Food </span>
                <span>Delivery Partner</span>
           </div>

           <div className={css.servicesCards}>
            <div className={css.servicesFeature}>
                <div className={css.imageWrapper}>
                    <Image src={Service1} objectFit='cover' alt=''  layout='intrinsic' />
                </div>
                <span>Easy to Order</span>
                <span>A few clicks on our app and you are good to go</span>
            </div>
            <div className={css.servicesFeature}>
                <div className={css.imageWrapper}>
                    <Image src={Service2} objectFit='cover' alt='' layout='intrinsic' />
                </div>
                <span>Free Delivery</span>
                <span>Delivery that is free and always on time</span>
            </div>
            <div className={css.servicesFeature}>
                <div className={css.imageWrapper}>
                    <Image src={Service3} objectFit='cover' alt='' layout='intrinsic' />
                </div>
                <span>Tasty Pizza</span>
                <span>Making tasty Pizza for your enjoyment is our biggest mission</span>
            </div>
           </div>
        </>
    )
}