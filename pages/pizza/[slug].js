import Image from "next/image"
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css"
import LeftArrow from "../../assets/arrowLeft.png"
import RightArrow from "../../assets/arrowRight.png"
import { UilPlusCircle, UilMinusCircle } from '@iconscout/react-unicons'
import { useState } from "react";

export default function Pizza({pizza}) {
 
    const src = urlFor(pizza.image).url()

    const [size, setSize] = useState(1)
    const [quantity, setQuantity] = useState(1)
    return(
        <Layout>
            <div className={css.container}>
                {/* left side */}
                <div className={css.imageWrapper}>
                    <Image loader={()=>src} 
                    src={src} alt='' objectFit='cover' layout='fill' unoptimized/>
                </div>
                {/* right side */}
                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{color:'var(--themeRed)'}}>R </span>{pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.variants}>
                            <button className={size===0 ? css.selected :''} onClick={()=> setSize(0)}>small</button>
                            <button className={size===1 ? css.selected :''} onClick={()=> setSize(1)}>meduim</button>
                            <button className={size===2 ? css.selected :''} onClick={()=> setSize(2)}>large</button>
                        </div>
                    </div>

                    <div className={css.quantity}>
                        <div className={css.counter}>
                            <UilMinusCircle size={40} width={25} onClick={()=> setQuantity((prev) => prev - 1)}/>
                            <span>{quantity}</span>
                            <UilPlusCircle size={40} width={25} onClick={()=> setQuantity((prev) => prev+ 1)}/>
                        </div>
                    </div>

                    <button className={`btn ${css.btn}`}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    //extract all the pizza objects where slug is defined
    const paths = await client.fetch(`*[_type=="pizza" && defined(slug.current)][].slug.current`)

    return{
        paths:paths.map((slug)=>(
            { params: {slug}}
        )),
        fallback:'blocking',
    }
}

export async function getStaticProps(context){
    const {slug=''} = context.params; 
    // extract pizza object and where the slug matches the one recieved from the url
    const pizza = await client.fetch(`*[_type=="pizza" && slug.current == '${slug}'][0]`);

    return{
        props:{
            pizza
        }
    }
}