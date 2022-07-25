import React from 'react';
import styles from "./css/style.css"
type cartPropsSmall = {
  numimg:number,
  opcion:number,
  cardsize:string,
  colecciones:any,
}
const CustomGridItem= ({
  numimg,
  opcion,
  cardsize,
  colecciones
}: cartPropsSmall) => {
  const gridContainer = `grid__card${cardsize}__${opcion}`
  const gridElementOne = `grid__coleccion--${opcion}`
  return( <>
  <div className={styles[`card${cardsize}__1--${opcion}`]}>
    <div className={styles[gridContainer]}>
    <div className={styles[gridElementOne]}>
    {
    (colecciones.length>0) ?
    (colecciones || []).map((item:any, index:number) => {
      return (index===numimg)?<>
             <div className={styles["card"]} >
          <div className="flex flex-column"></div>
      <img key ={index} className={styles[`img__card${cardsize}`]} src={item.image}/>
          <div className={styles[`footer__card${cardsize}`]} >
          <div className={styles[`header__card${cardsize}`]}><h2 className={styles[`name__card${cardsize}`]}>{item.name}</h2></div>
            <p className={styles[`description__card${cardsize}`]}>{item.description}</p>
            <a className={styles[`link__card${cardsize}`]} href={item.link}>Ver info</a>
      </div>
      </div>
      </>:''
    })
    :''
    }</div></div>

    </div></>)

}

export default CustomGridItem
