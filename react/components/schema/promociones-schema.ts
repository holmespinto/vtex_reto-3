const promotionSchema = {
  title: "Adjuntar Promociones",
  type: "object",
  properties: {
    pantallas: {
      title: "Pantallas",
      type: "string",
      enum: ["desktop", "mobile"]
    },
    colecciones: {
      title: "Productos",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string"
          },
          name: {
            type: "string"
          },
          description: {
                type: "string"
            },
            image: {
              widget: {
                'ui:widget': 'image-uploader',
              },
              type: "string"
            },
            link: {
                type: "string"
            }
        }
      }
    }
  },
  //https://react-jsonschema-form.readthedocs.io/en/latest/usage/dependencies/
  dependencies: {
    pantallas: {
    //https://react-jsonschema-form.readthedocs.io/en/latest/usage/oneof/
      "oneOf": [
        {
          properties: {
            pantallas: {
              enum: ["desktop"]
            },
            opcion: {
              title: "Selecione una de las opciones",
              type: "number",
              enum: [1,2,3,4],
            }
          }
        },
        {
          properties: {
            pantallas: {
              enum: ["mobile"]
            },
            opcion: {
              title: "Selecione una de las opciones",
              type: "number",
              enum: [1,2,3,4,5,6],
            }
          }
        }
      ]
    }
  }

}

export default promotionSchema
