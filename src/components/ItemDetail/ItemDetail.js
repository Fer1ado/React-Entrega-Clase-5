import Counter from "../Counter/Counter"
import "./ItemDetail.css"
import {useState} from "react"
import { useContext } from "react"
import Contexto from "../ContextoCarrito/ContextoCarrito"

const ItemDetail = ({name, imagen, descripcion, stock, id, precio}) => {
    const [count, setCount] = useState(0)
    //const [agregoProd, setAgregoProd] = useState(0)

    const { agregarItem, buscarCantidadProd} = useContext(Contexto)

    const sumaCarro = (cantidad) => {
        
        setCount (cantidad)
        const productoAgregar =  {
            id, name, precio, cantidad
        }
       
        agregarItem(productoAgregar) 

    }

    const definirCantidad = buscarCantidadProd(id)

    

    return(
        <>
        <div className="zoomup card-image "><img src={imagen} alt={imagen}/>
        <h1><span className="card-title">{name}</span></h1>
        </div>

        <div className="content">
        <blockquote>{descripcion}</blockquote>
        <h6>Importe: <b>${precio}</b>  Disp: <b>{stock}</b></h6>
        <h5>Agreegadas al Carrito: <b>{definirCantidad}</b> Monto: ${(precio * definirCantidad)}</h5>
        {count === 0 ? 
            <Counter stock={stock} key={id} agregar={sumaCarro} initial={definirCantidad} />
            :  <h4>  <a class="btn-floating btn-large purple pulse"><i class="large material-icons">shopping_basket</i></a><br></br> Terminar Compra </h4>
        }

        </div>
        </>
    )
}

export default ItemDetail