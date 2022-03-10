import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail.js"
import listaProductos from "./listaProductos.js"

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([])

    useEffect(() => {
        const pedido = new Promise ((res,rej)=>{
            setTimeout( ()=>{
                setProducto(listaProductos[0])
                let textoLoading = document.getElementById("cargando2")
                textoLoading.classList.add('loadingEnd')
            }
            ,2000)
        })
    },[])

    return (
        <>
            <div className='container-xl mt-3'>
                <div id='cargando2'><img src='img/loader.gif'></img></div>
                <ItemDetail producto={producto} />
            </div>
        </>
    )

}

export default ItemDetailContainer