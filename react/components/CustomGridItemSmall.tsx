import React from 'react';
import styles from "./css/style.css"

type Props = {
  opciones: number
  coleccionOne: {
    title: string,
    name: string,
    description: string,
    link: string,
    image: string
  }
  coleccionTwo: {
    title: string,
    name: string,
    description: string,
    cta: string,
    image: string
  }
}

const CustomGridItemSmall = ({
  opciones,
  coleccionOne,
  coleccionTwo
}: Props) => {
  const gridTypeContainer = `grid__itemSmall__${opciones}`

  const gridTypeElementOne = `grid__elementOne--${opciones}`

  const gridTypeElementTwo = `grid__elementTwo--${opciones}`

  return(
    <div className={styles[gridTypeContainer]}>
      <div className={styles[gridTypeElementOne]}>
        <img className={styles["img__itemSmall"]} src={coleccionOne.image}/>
        <h2 className={styles["name__itemSmall"]}>{coleccionOne.name}</h2>
        <p className="mt0 mb0">{coleccionOne.description}</p>
        <a className={styles["cta__itemSmall"]} href={coleccionOne.link}>Ver más</a>
      </div>
      <div className={styles[gridTypeElementTwo]}>
        <img className={styles["img__itemSmall"]} src={coleccionTwo.image}/>
          <h2 className={styles["name__itemSmall"]}>{coleccionTwo.name}</h2>
          <p className="mt0 mb0">{coleccionTwo.description}</p>
        <a className={styles["cta__itemSmall"]} href={coleccionTwo.cta}>Ver más</a>
      </div>
    </div>
  )

}

export default CustomGridItemSmall
