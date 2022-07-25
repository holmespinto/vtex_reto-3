📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# GRID PROMOCIÓN DE OFERTAS

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Para la implementación de la tarea No3 se tuvo en cuenta la documentación correspondiente al react-jsonschema 

 ![principa](https://user-images.githubusercontent.com/70826804/180468251-b0128df5-c27b-49dd-b635-9962e00dd49c.png)

## Configuración

Para la implementación  del schema se tuvó encuenta la siguiente documentación:

1. https://react-jsonschema-form.readthedocs.io/en/latest/usage/dependencies/
2. https://react-jsonschema-form.readthedocs.io/en/latest/usage/oneof/

La configuración del schema puede observarse en el siguiente link

([https://vtex.io/docs/components/all/vtex.search-result@3.56.1/](https://github.com/holmespinto/vtex_reto-3/blob/master/react/components/schema/promociones-schema.ts)). 

### `IMPLEMENTACIÓN` 

1. Ajustamos el componente para la grilla como muestra el requerimiento inicial. Para ello, se implementaron los css y los componentes, esta parte inicial quedó como se muestra en la siguiente imagen:

![grid_ciclo](https://user-images.githubusercontent.com/70826804/180645362-b639beac-f8fd-4c8b-93d2-736e213fd94f.png)

Para esta implementación se creó el componente
[![CustomGridOpcion.tsx](https://github.com/holmespinto/vtex_reto-3/blob/master/react/components/CustomGridOpcion.tsx)],
el cual permite cambiar las posiciones de la información seleccionada en el site editor. Este componente posee tres espacios: izquierda, centro, derecha, donde la información va a trasladarse de a través de estos. De esta manera, la configuración permite que cada una de las seis opciones se traslade por cada una de estas tres configuraciones, permitiendo que cada elemento, según la selección del cliente, se convierta en relevante para en la grilla. 

 En el archivo CustomGridItem.tsx [![CustomGridItem.tsx](https://github.com/holmespinto/vtex_reto-3/blob/master/react/components/CustomGridItem.tsx)] se encuentra configurada la card que va a permitir mostrar la información de cada elemento. Existen dos tipos de card: Small y Big, en la implementación de este archivo se configuró de tal manera que ambas puedan ser pintadas por React desde este componente.
 
 En el archivo principal,  [![PromotionGrid.tsx](https://github.com/holmespinto/vtex_reto-3/blob/master/react/components/PromotionGrid.tsx)],
por medio de un switch, se van asignando cada caso de la variable "opcion"  al componente, de acuerdo a lo configurado en el site editor.
 
### `CONCLUCIÓN`

Finalmente, como desarrollador se aprendió a utilizar dependencias en los schemas para la asignación de variables, utilizando los elementos del select; también, se tuvo en cuenta la implementación de los css para el orden de cada posición, sin embargo, este no fue el caso aplicado en este desarrollo, pues, se consideró las opciones de un switch en react para cambiar las posiciones de cada información.  La ventaja de esta implementación, es que agregando una variable en el schema, donde se permita al cliente escoger entre las opciones: "Orden Secuencial", "Orden Aleatorio", "Primera información fija", entre otros. 
Por otra parte, tratandoce de la configuración en los css, para futuras contribuciones, se podría implementar sin afectar lo que se ha realizado hasta ahora, solo se tendría que agregar, dentro  del css, las nuevas líneas de código que permitan hacer los cambios de posición del elemento.




