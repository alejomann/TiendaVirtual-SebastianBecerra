import React from 'react'
import { useState } from 'react'
import ItemCount from "./ItemCount.js"

const ItemCard = ({titulo,descripcion,precio,imagen,stock,inicial}) => {

    //let [getter,setter] = useState(valor-inicial)
    let [estado,setEstado] = useState(inicial)

    //sumo producto
    const clickMenos = () => {
        if(estado>0){
            setEstado(estado-1)
        }
    }

    //resto producto
    const clickMas = () => {
        if(estado<stock){
            setEstado(estado+1)
        }
    }

    //agrego al carrito
    const onAdd = () => {
        console.log("Agregar al carrito: " + estado + " " + titulo);
    }

    return (
        <div className="card p-4">
            <img src={imagen} className="card-img-top w-100"></img>
            <div className="card-body p-0">
                <h5 className="card-title fw-bold">{titulo}</h5>
                <p className="card-text mb-1">{descripcion}</p>
                <p className='price mb-3'>$ {precio}</p>
                <ItemCount inicial={inicial} clickMenos={clickMenos} clickMas={clickMas} estado={estado} onAdd={onAdd} />
            </div>
        </div>
    )

}

export default ItemCard