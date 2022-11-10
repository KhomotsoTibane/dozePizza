import Image from "next/image";
import Layout from "../../components/Layout";
import { urlFor, client } from "../../services/client";
import css from "../../styles/Pizza.module.css";
import { UilPlusCircle, UilMinusCircle } from "@iconscout/react-unicons";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, {Toaster} from "react-hot-toast";

export default function Pizza({pizza}) {
 
    const src = urlFor(pizza.image).url();
    const [size, setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const addPizza = useStore((state)=>state.addPizza);
    const addToCart = ()=> {
        addPizza({...pizza, price:pizza.price[size], quantity:quantity, size:size});
        toast.success("Added to cart");
    }
    return(
        <Layout>
            <div className={css.container}>
                {/* left side */}
                <div className={css.imageWrapper}>
                    <Image loader={()=>src} 
                    src={src} alt="" objectFit="cover" layout="fill" unoptimized/>
                </div>
                {/* right side */}
                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{color:"var(--themeRed)"}}>R </span>{pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.variants}>
                            <button className={size===0 ? css.selected :""} onClick={()=> setSize(0)}>small</button>
                            <button className={size===1 ? css.selected :""} onClick={()=> setSize(1)}>meduim</button>
                            <button className={size===2 ? css.selected :""} onClick={()=> setSize(2)}>large</button>
                        </div>
                    </div>

                    <div className={css.quantity}>
                        <div className={css.counter}>
                            <UilMinusCircle size={40} width={25} onClick={()=> setQuantity((prev) => prev - 1)}/>
                            <span>{quantity}</span>
                            <UilPlusCircle size={40} width={25} onClick={()=> setQuantity((prev) => prev+ 1)}/>
                        </div>
                    </div>

                    <button className={`btn ${css.btn}`} onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
                <Toaster/>
            </div>
        </Layout>
    )
}

//give all possible paths
export async function getStaticPaths(){
    //slug - the unique indentifying part of a web address, for this case it will be the pizza name "chicken-pizza"
    //use the client to fetch the pizza document with the pizza objects where the slug is defined.
    const paths = await client.fetch(`*[_type=="pizza" && defined(slug.current)][].slug.current`)

    return{
        paths:paths.map((slug)=>(
            { params: {slug}}
        )),
        fallback:"blocking",
    }
}

export async function getStaticProps(context){
    const {slug=""} = context.params; 
    // extract pizza object and where the slug matches the one recieved from the url
    const pizza = await client.fetch(`*[_type=="pizza" && slug.current == "${slug}"][0]`);

    return{
        props:{
            pizza
        }
    }
}