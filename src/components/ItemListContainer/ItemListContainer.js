import './ItemListContainer.css'
import { getProducts, getProductByCategory } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams} from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

   const { IdCategoria } = useParams()
    
    useEffect(()=>{
        if(!IdCategoria){
            getProducts().then(products => {
               setProducts(products)  })

             } else {
            getProductByCategory(IdCategoria).then(products => {
                setProducts(products)
        })
        }

    },[IdCategoria])



    return (
        <>
    
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    
        </>
    )
}

export default ItemListContainer