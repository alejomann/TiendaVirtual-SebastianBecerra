import React from 'react'
import ItemList from "./ItemList.js"

const ItemListContainer = (props) => {

  return (
    <>
      <div className='container-xl mt-3 grillaProductos'>
        <h2>{props.greeting}</h2>
        <ItemList />
      </div>
    </>
  )
  
}

export default ItemListContainer