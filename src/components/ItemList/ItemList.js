import "./ItemList.css"
import Item from "../item/item"


const ItemList = ({products}) => {

return(
    <div className="muestras">
        {products.map(prod => <Item key={prod.sys.id} prod={prod}/>)}
    </div>
   )
}

export default ItemList
