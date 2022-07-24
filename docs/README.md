📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PROMOCIÓN DE OFERTAS

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Para la implementación de la tarea no3 se tuvo en cuenta la documentación correspondiente al react-jsonschema 

 ![principa](https://user-images.githubusercontent.com/70826804/180468251-b0128df5-c27b-49dd-b635-9962e00dd49c.png)

## Configuration 

Para la implementacion  del schema se tuvieron encueta la siguiente documentación

1. https://react-jsonschema-form.readthedocs.io/en/latest/usage/dependencies/
2. https://react-jsonschema-form.readthedocs.io/en/latest/usage/oneof/

La configuración del schema puede obserarla en el siguiente link

([https://vtex.io/docs/components/all/vtex.search-result@3.56.1/](https://github.com/holmespinto/vtex_reto-3/blob/master/react/components/schema/promociones-schema.ts)). 

### `IMPLEMENTACION DE LAS GRILLAS EN EL COMPONENTE` 

1. Ajustamos el componente para la grilla como muestra el requerimiento, inicial. Para ello, se implementaron sos css y los compoonente, esta parte inicial quedo como se muestra en la siguiente imagen:

![grid_ciclo](https://user-images.githubusercontent.com/70826804/180628322-59c9098b-5349-4aad-b5e8-a1b88912f5ce.png)

### `CONCLUCIÓN`

Finalmente, como desarrollador se aprendió a utilizar dependencias en los schemas para la asignación de variables, utilizando un select, también se tuvo en cuenta la implementación de los css para el caso del orden de cada posición, sin embargo, este no fue el caso aplicado en este desarrollo, pues, se consideró las opciones de un switch en react para cambiar las posiciones de cada información.  La ventaja de esta implementación, es que agregando una variable en el schema, donde se permita al cliente escoger entre las opciones: "Orden Secuencial", "Orden Aleatorio", "Primera información fija", entre otros. 
Por otra parte, tratandoce de la configuración en los css, para futuras contribuciones se podría implementar sin afectar lo que se ha realizado hasta ahora, solo se tendría que agregar, dentro  del css, las nuevas líneas de código que permitan hacer los cambios de posición del elemento.




