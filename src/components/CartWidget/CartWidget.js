import './CartWidget.css'
import { useContext } from 'react'
import  Contexto from '../ContextoCarrito/ContextoCarrito'

const CartWidget = () => {
    const {calcularCantidad} = useContext(Contexto)

    const valor = calcularCantidad()

    return (
        <li><a href="#"><i className="material-icons">shopping_cart</i></a><h6 className="contador">{valor}</h6></li>
    )
}

export default CartWidget