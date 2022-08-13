import {useState, createContext} from 'react'

const Contexto = createContext()

export const ContextoCarrito = ({children}) => {
    const [carro, setCarro] = useState([])


    const agregarItem = (productoAgregar) => {
        if(!hayEnCarrito(productoAgregar.id)){
            setCarro([...carro, productoAgregar])
        } else {
            const carroNuevo = carro.map(prod => {
                if(prod.id === productoAgregar.id){
                    const productoNuevo = {
                    ...prod, 
                    cantidad: productoAgregar.cantidad}
                    return productoNuevo
                } else {
                    return prod
                }
            })
            setCarro(carroNuevo)
        }
    }

    const calcularCantidad = () => {
        let acc = 0
        carro.forEach(prod => {
        acc += prod.cantidad
        })

        return acc
    }

    const quitarItem = (id) => {
        const nuevoCarro = carro.filter(prod => prod.id !== id)
        setCarro(nuevoCarro)
    }

    const hayEnCarrito = (id) => {
    return  carro.some(prod => prod.id === id)
    }

    const vaciarCarro = () => {
        setCarro([])
        }


    const buscarCantidadProd = (id) => {
        const item = carro.find(prod => prod.id === id)
        return item?.cantidad
    }


console.log(carro)


    return(
        <Contexto.Provider value={{carro, agregarItem, calcularCantidad, hayEnCarrito, vaciarCarro, quitarItem, buscarCantidadProd }}>
            {children}
        </Contexto.Provider>
    )

}

export default Contexto