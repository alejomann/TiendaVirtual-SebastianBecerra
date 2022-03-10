import React from 'react'

const ItemCount = ({inicial,clickMas,clickMenos,onAdd,estado}) => {

    return (
        <div className='contadorProductos'>
            <div className='contSumaResta'>
                <button className='btnResta' onClick={clickMenos}>-</button>
                <input className='numero' value={estado} disabled></input>
                <button className='btnSuma' onClick={clickMas}>+</button>
            </div>
            <button className='btn btn-outline-primary mt-2 w-100 btnAgregar' onClick={onAdd}>Agregar</button>
        </div>
    )

}

export default ItemCount