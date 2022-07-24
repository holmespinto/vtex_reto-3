//@ts-check
import React from 'react'
import PropTypes from 'prop-types'
import promotionSchema from './schema/promociones-schema'
import styles from "./css/style.css"
import CustomGridOpcion from './CustomGridOpcion'

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


 console.log('ClassNames',opcion,'pantallas',pantallas)
  return (<>

                <div className={styles[`grid__1`]}>
                        {
                          (()=>{
                                switch (opcion) {
                                    case 1:
                                        return (<>
                                          <CustomGridOpcion
                                          colecciones={colecciones}
                                          opcion= {opcion}
                                          numimg= {1}
                                          cardsize= {'Small'}
                                         />
                                         </>)
                                        case 2:
                                        return (<>
                                          <CustomGridOpcion
                                          colecciones={colecciones}
                                          opcion= {opcion}
                                          numimg= {1}
                                          cardsize= {'Small'}
                                         />
                                         </>)
                                         default:return (<>
                                          <CustomGridOpcion
                                          colecciones={colecciones}
                                          opcion= {opcion}
                                          numimg= {1}
                                          cardsize= {'Small'}
                                         />
                                         </>)
                                      }
                            })()
                          }

          </div>
          </>)
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
