import React from 'react'

const ItemDetail = ({producto}) => {

    console.log(producto);

    return (
        <>
            <div className='contDetalle'>
                <div className='contFoto'><img src={producto.pictureUrl} className="card-img-top w-100"></img></div>
                <div className="contData">
                    <h5 className="titulo">{producto.title}</h5>
                    <p className="descripcion">{producto.description}</p>
                    <p className='price'>{producto.price}</p>
                </div>
            </div>
        </>
    )

}

export default ItemDetail