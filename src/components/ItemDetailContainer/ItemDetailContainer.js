import { useEffect, useState } from "react"
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const {IdProducto} = useParams()


    useEffect(()=>{
        getProductById(IdProducto)
        .then(res => {
            setProducto(res)

            
    })
    .catch(error =>{
        console.log(error)
    })
},[])

return (
    <div>
        <ItemDetail name={producto?.fields.nombre} 
        imagen={producto?.fields.image.fields.file.url} 
        descripcion={producto?.fields.descripcion} 
        stock={producto?.fields.stock}
        id={producto?.sys.id} precio={producto?.fields.importe}/>
        
    </div>
    )
}

export default ItemDetailContainer