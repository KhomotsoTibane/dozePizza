import Image from "next/image"
import Link from "next/link"
import css from "../styles/Menu.module.css"
import {urlFor, client} from "../services/client"

export default function Menu({pizzas}) {

    return (
        <div className={css.container} id="menu">
            <div className={css.heading}>
                <span>Allow us</span>
                <span>To Amaze You</span>
                <span>With Our Menu</span>
            </div>

            <div className={css.menu}>
                {pizzas && pizzas.map((pizza,id)=>{
                const src = urlFor(pizza.image).url()
                return (
                    <div className={css.pizza} key={id}>
                        <Link href={`./pizza/${pizza.slug.current}`}>
                            <div className={css.imageWrapper}>
                                <Image loader={()=>src} 
                                src={src} alt='' objectFit='cover' layout='fill' unoptimized/>
                            </div>
                        </Link>
                        <span>{pizza.name}</span>
                        <span><span style={{color:'var(--themeRed)'}}>R</span> {pizza.price[1]}</span>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}