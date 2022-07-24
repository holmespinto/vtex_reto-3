import React from 'react';
import CustomGridItem from './CustomGridItem'
import styles from "./css/style.css"

type cartPropsSmall = {
  numimg:number
  opcion:number
  cardsize:string
  colecciones:any
}
const CustomGridItemOne= ({
  numimg,
  opcion,
  cardsize,
  colecciones
}: cartPropsSmall) => {
  console.log("numimg", numimg,"cardsize", cardsize)
  return( <>
  {
    (opcion===1)||(opcion===4)?
    <div className={styles[`grid__row--1`]}>
  <CustomGridItem
    numimg= {opcion}
    opcion= {opcion}
    cardsize={'Big'}
    colecciones={colecciones}
  />
    </div>:''
  }
  <div className={styles[`grid__row--1`]}>
  <CustomGridItem
    numimg= {1}
    opcion= {opcion}
    cardsize={'Small'}
    colecciones={colecciones}
  />   <CustomGridItem
    numimg= {2}
    opcion= {opcion}
    cardsize={'Small'}
    colecciones={colecciones}
  />
  </div>

  {
    (opcion===2)||(opcion===5)?
    <div className={styles[`grid__row--1`]}>
  <CustomGridItem
    numimg= {opcion}
    opcion= {opcion}
    cardsize={'Big'}
    colecciones={colecciones}
  />
    </div>:''
  }
  <div className={styles[`grid__row--1`]}>
  <CustomGridItem
    numimg= {3}
    opcion= {opcion}
    cardsize={'Small'}
    colecciones={colecciones}
  />
   <CustomGridItem
    numimg= {4}
    opcion= {opcion}
    cardsize={'Small'}
    colecciones={colecciones}
  />
  </div>
  {
    (opcion===3)||(opcion===6)?
    <div className={styles[`grid__row--1`]}>
  <CustomGridItem
    numimg= {opcion}
    opcion= {opcion}
    cardsize={'Big'}
    colecciones={colecciones}
  />
    </div>:''
  }

  </>)

}

export default CustomGridItemOne
