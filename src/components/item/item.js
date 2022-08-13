import "./item.css"
import {Link} from "react-router-dom"


const Item = ({prod}) =>{
    
  
  
    return (
    
    <>
    <div className="card z-depth-4">
      <div className="card-image">
        <img src={prod.fields.image.fields.file.url} alt={prod.fields.image.fields.file.url}/>
        <span className="card-title"></span>
        <Link to={`/details/${prod.sys.id}`} className="btn-floating halfway-fab waves-effect waves-light purple" title="Ver detalle del producto"><i className="material-icons">add</i></Link>
      </div>
      
      <div className="card-content">
        <h5> {prod.fields.nombre.toUpperCase()}</h5>
      </div>
    </div>
    </>    
        )
}

export default Item