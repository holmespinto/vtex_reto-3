//@ts-check
import React from 'react'
import PropTypes from 'prop-types'
import promotionSchema from './schema/promociones-schema'
import styles from "./css/style.css"
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
//import classNames from 'classnames';
//import CustomGridItemBig from './CustomGridItemBig'
//import CustomGridItemSmall from './CustomGridItemSmall'

 type cartPropsBig = {
  opcion:number,
  element:number,
  colecciones: any
}
const CustomGridItemBig = ({
  opcion,
  element,
  colecciones,
}: cartPropsBig) => {
  //console.log('elementOne',elementOne)
  return(
<div className={styles[ `grid__cardSmall__${opcion}`]}>
    {(colecciones || []).map((item:any, index:number) => {
      return (index===element)?<>
      <img key ={index} className={styles["img__cardBig"]} src={item.image}/>
          <div className={styles["footer__cardBig"]} >
          <div className={styles["header__cardBig"]}><h2 className={styles["name__cardBig"]}>{item.name}</h2></div>
            <p className={styles["description__cardBig"]}>{item.description}</p>
            <a className={styles["link__cardBig"]} href={item.link}>Ver info</a>
          </div>
      </>:''
    })}
  </div>
  )
}
type cartPropsSmall = {
  coleccion1:number,
  coleccion2:number,
  opcion:number
  colecciones:any
}
const CustomGridItemSmall = ({
  coleccion1,
  coleccion2,
  opcion,
  colecciones
}: cartPropsSmall) => {
  const gridContainer = `grid__cardSmall__${opcion}`
  const gridElementOne = `grid__coleccionOne--${opcion}`
  const gridElementTwo = `grid__coleccionTwo--${opcion}`

  return( <>
    <div className={styles[gridContainer]}>
    <div className={styles[gridElementOne]}>
    {(colecciones || []).map((item:any, index:number) => {
      return (index===coleccion1)?<>
             <div className={styles["card"]} >
          <div className="flex flex-column"></div>
      <img key ={index} className={styles["img__cardSmall"]} src={item.image}/>
          <div className={styles["footer__cardSmall"]} >
          <div className={styles["header__cardSmall"]}><h2 className={styles["name__cardSmall"]}>{item.name}</h2></div>
            <p className={styles["description__cardSmall"]}>{item.description}</p>
            <a className={styles["link__cardSmall"]} href={item.link}>Ver info</a>
      </div>
      </div>

      </>:''
    })}</div>

   <div className={styles[gridElementTwo]}>
      {(colecciones || []).map((item:any, index:number) => {
      return (index===coleccion2)?<>
             <div className={styles["card"]} >
          <div className="flex flex-column"></div>
      <img key ={index} className={styles["img__cardSmall"]} src={item.image}/>
          <div className={styles["footer__cardSmall"]} >
          <div className={styles["header__cardSmall"]}><h2 className={styles["name__cardSmall"]}>{item.name}</h2></div>
            <p className={styles["description__cardSmall"]}>{item.description}</p>
            <a className={styles["link__cardSmall"]} href={item.link}>Ver info</a>
          </div>
          </div>

      </>:''
    })}</div>

    </div></>)

}
type Props = {
  colecciones: {
    title?: string,
    name?: string,
    description?: string,
    image?: string,
    link?: string,

  }[],
  opcion:number,
  pantallas:string,
}

const PromotionGrid =({
  colecciones,opcion,pantallas
}: Props)=> {
  //const { isMobile } = useDevice()
//console.log('styles',classNames(styles[`itemSmall__1--${opcion}`]))
const posgrid= `grid__${opcion}`
 const { isMobile } = useDevice()

 const CSS_HANDLES = [
   'grid__desktop',
   'grid__mobile'
 ]

 const handles = useCssHandles(CSS_HANDLES)

 const containerMainClass = (
     isMobile
     ?
     `${styles["mobile__cards__container"]} ${handles.grid__mobile}`
     :
     `${styles["desktop__cards__container"]} ${handles.grid__desktop}`
 )
 console.log('ClassNames',opcion,'pantallas',pantallas)
  return (
    <div className={containerMainClass}>

<div className={styles[posgrid]}>
   <CustomGridItemBig
    colecciones={colecciones}
    element= {6}
    opcion= {opcion}
  />
  <div className={styles[`cardSmall__1--${opcion}`]}>
  <CustomGridItemSmall
    colecciones={colecciones}
    opcion= {opcion}
    coleccion1= {1}
    coleccion2= {2}
  />
 </div>
  <div className={styles[`cardSmall__2--${opcion}`]}>
<CustomGridItemSmall
    colecciones={colecciones}
    opcion= {opcion}
    coleccion1= {4}
    coleccion2= {5}
  />
  </div>
</div>
</div>
  )
}
PromotionGrid.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}
PromotionGrid.defaultProps = {
  opcion: 1,
  pantallas:"desktop",
  colecciones: [
    {
      title: 'default',
      name: 'name default',
      description: 'Description default',
      image: 'url/image-1.png',
      link: '/',
    },
  ],
}
PromotionGrid.schema = promotionSchema

export default PromotionGrid
