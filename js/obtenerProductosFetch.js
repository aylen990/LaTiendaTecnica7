fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => console.log(data));

const endpoint = `./data/datos.json`
const obtenerProd = async () => {
    response = await fetch (endpoint)
    response = await response.json()
    console.log(response)
}
obtenerProd()