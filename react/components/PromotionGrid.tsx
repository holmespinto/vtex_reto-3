import React from 'react';
import promotionSchema from './schema/promociones-schema'
import styles from "./css/style.css"
import PropTypes from 'prop-types'

type Props = {
  opcion?: number
  pantallas?: string
  colecciones: {
    title?: string,
    name?: string,
    description?: string,
    image?: string,
    link?: string,

  }[]
}

const PromotionGrid =({
  colecciones,
  opcion
}: Props)=> {
console.log('products',colecciones)
  const ClassName = `grid__${opcion}`

  return (
    <div className={styles[ClassName]}>
    Aqui va mi grid
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
