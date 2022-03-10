import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const Main = () => {
  return (
    <main>
      {/* <ItemListContainer greeting={"Listado de productos"}/> */}
      <ItemDetailContainer/>
    </main>
  )
}

export default Main