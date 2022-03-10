import React from 'react'
import Item from "./Item.js"
import { useState, useEffect } from 'react'
import listaProductos from "./listaProductos.js"

const ItemList = () => {

    const [productos,setProductos] = useState([])

    useEffect(() => {
        // console.log("Ejecutando useEffect");
        const pedido = new Promise ((res,rej)=>{
            setTimeout( ()=>{
                setProductos(listaProductos)
                let textoLoading = document.getElementById("cargando")
                textoLoading.classList.add('loadingEnd');
            }
            ,2000)
        })

        // console.log(productos);

        // pedido
        // .then((resultado)=>{
        //     console.log("bien!");
        //     setProductos(resultado)
        // })
        // .catch((error)=>{
        //     console.log("error");
        // })
        
    },[])

    // console.log(productos);
    
    return (
        <>
            <div className='listado'>
                <div id='cargando'><img src='img/loader.gif'></img></div>
                {productos.map((producto)=>{
                    return <Item titulo={producto.title} descripcion={producto.description} precio={producto.price} imagen={producto.pictureUrl} stock={producto.stock} inicial={producto.inicial} key={producto.id}  />
                })}
            </div>
        </>
    )
    
}

export default ItemList