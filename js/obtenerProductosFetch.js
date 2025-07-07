//promesa sincronica
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  //promesa asincronica async/await
  const endpoint = `./data/datos.json`
  const obtenerProd = async () => {
 
    response = await fetch (endpoint)
    response = await response.json()
    console.log(response)
  }
  obtenerProd()

  //  //promesa asincronica async/await try/catch
  const obtenerProd2 = async () => {
 try{
    response = await fetch (endpoint)
    response = await response.json()
    console.log(response)
  }catch(error){
  console.log("error al leer datos")
}
}
obtenerProd2()