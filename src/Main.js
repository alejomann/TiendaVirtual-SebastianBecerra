import React from 'react'
import ItemCard from "./components/ItemCard.js"

const Main = () => {
  return (
    <main>
      <div className='container-xl mt-5 grillaProductos'>
        <ItemCard titulo="Notebook Asus" descripcion="X515 Celeron 4020 4Gb Ssd M2 960Gb 15.6" precio="66.999" imagen="img/asus.jpeg" stock={4} inicial={0} />
        <ItemCard titulo="Notebook Dell" descripcion="Inspiron 3501 Core i3 16Gb Ssd M2 120Gb 1Tb 15.6" precio="75.999" imagen="img/dell.jpeg" stock={6} inicial={0} />
      </div>
    </main>
  )
}

export default Main