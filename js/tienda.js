document.addEventListener("DOMContentLoaded", ()=>{
    const endpoint = '/data/datos.json'
    const getProductos = async () => {
        try {response = await fetch(endpoint)
            datos = await response.json()
            console.log(datos)
            mostrarProductos(datos);
        } catch (error){
            console.log(error)
        }
    }
    getProductos();

    const contenedorProd = document.querySelector('section.productos')
    const mostrarProductos = (datos)=>{
        datos.forEach(item => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML= ` <div class="card">
                    <div class="top">
                        <img src="${item.image}" alt="">
                        <p class="titProd">${item.title}</p>
                        <p class="descrpcion">${item.description} </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>${item.price}</span> <button class="favorito"><i
                                    class="fa-solid fa-heart-circle-check"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant-${item.id}" min="0" value="1">
                            </div>
                            <button class="addcarrito" id="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>`
                contenedorProd.appendChild(card)

                
                //evento boton agregar 
                card.querySelector("#addcarrito").onclick = () => {
                 agregarAlCarrito(item)
                }
        });
    }
});