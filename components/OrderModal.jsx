import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react"
import toast,{ Toaster } from "react-hot-toast"
import { createOrder } from "../lib/orderHandler"
import { useStore } from "../store/store"
import {useRouter} from "next/router"
import css from "../styles/OrderModal.module.css"

export default function OrderModal({opened, setIsOpen, paymentMethod}) {
    const theme = useMantineTheme()
    const router = useRouter()
    const [formData, setformData] = useState({})
    const clearCart = useStore((state)=>state.clearCart)

    
    const handleInput = (e)=>{
        setformData({...formData, [e.target.name]: e.target.value})
    }

    //when the form is submitted
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const id = await createOrder({...formData, total, paymentMethod})
        toast.success("Order Placed");
        clearCart();
        {typeof window !== "undefined" && localStorage.setItem("order", id)}

        router.push(`/order/${id}`)
    }

    const total = typeof window !== "undefined" && localStorage.getItem("total")
    return(
        <Modal
        overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={()=> setIsOpen(false)}
      >
        {/* Modal content */}
        <h3>Order Details</h3>
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input onChange={handleInput} type="text" name="name" placeholder="Name" required />
            <input onChange={handleInput} type="text" name="phone"  placeholder="Phone number" required/>
            <textarea onChange={handleInput}  name="address" cols={8} rows={3} placeholder="Delivery address"></textarea>
            <span>
                You will pay <span>R{total}</span> on delivery
            </span>
            <button type="submit" className="btn">Place order</button>
        </form>
        <Toaster/>
      </Modal>
    )

}