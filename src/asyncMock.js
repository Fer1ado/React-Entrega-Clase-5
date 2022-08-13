const products = [
  {
    "sys": { "id": "1" },
    "fields": {
      "nombre": "posa macetas decorativo",
      "importe": 600,
      "categoria": "cuencos",
      "stock": 15,
      "descripcion": "estas bases de maceta únicas son especiales para tu jardín",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item1-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "2" },
    "fields": {
      "nombre": "platos playos",
      "importe": 900,
      "categoria": "platos",
      "stock": 53,
      "descripcion": "Este juego de platos es el ideal para destacar tus comidas",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item10-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "3" },
    "fields": {
      "nombre": "Platos de Postre",
      "importe": 1300,
      "categoria": "platos",
      "stock": 24,
      "descripcion": "Nuestros platos de postre son pequeños y versátiles",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item11-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "5" },
    "fields": {
      "nombre": "Plato de Gres",
      "importe": 1800,
      "categoria": "platos",
      "stock": 6,
      "descripcion": "Los platos de Gres son especiales por su dureza y esmaltado distintivo",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item13-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "6" },
    "fields": {
      "nombre": "Tazas de te chino",
      "importe": 500,
      "categoria": "tazas",
      "stock": 19,
      "descripcion": "Las tasas de te chinas tienen un trabajo especial de esmalte para bebidas calientes",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item2-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "7" },
    "fields": {
      "nombre": "Cuencos de Terracota",
      "importe": 700,
      "categoria": "cuencos",
      "stock": 84,
      "descripcion": "Los cuencos de la tierra son los indicados para organizar tus cosas",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item4-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "8" },
    "fields": {
      "nombre": "Cuencos de Rio",
      "importe": 800,
      "categoria": "cuencos",
      "stock": 12,
      "descripcion": "Los cuencos del rio estan especialmente preparados para líquidos fermentados",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item5-min.jpg` }
        }
      }
    }
  },
  {
    "sys": { "id": "9" },
    "fields": {
      "nombre": "Juego de mesa",
      "importe": 1500,
      "categoria": "varios",
      "stock": 16,
      "descripcion": "los juegos de terracota vienen genial para el uso diario en la casa",
      "image": {
        "fields": {
          "file": { "url": `${process.env.PUBLIC_URL}/images/item9-min.jpg` }
        }
      }
    }
  }
]



export const getProducts = () => {
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(products)
        },500)
})
}

export const getProductById = (id) => {
  return new Promise((resolve,) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.sys.id === id))
      
      },500)

})
}

export const getProductByCategory = (IdCategoria) => {
  return new Promise((resolve,) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.fields.categoria === IdCategoria))
      
      },500)

})
}
