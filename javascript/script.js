

let reservas = JSON.parse(localStorage.getItem("cart")) || [];

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


let carrito = document.querySelector("#shop-content")
fetch("../data.json")
.then((response) => response.json())
.then((data) => {
    data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">€${product.precio}</p>
    `;

    shopContent.append(content);

    let reservar = document.createElement("button");
    reservar.innerText = "Reservar";
    reservar.className = "Reservar";
    content.append(reservar);

    reservar.addEventListener('click', () => {
        const repeat = reservas.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat){
            reservas.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
        reservas.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        } 
        Toastify({ 
            text: "Reservaste esta visita",
            className: "info",
            style: {
            background: "#7319bd",
            }
        }).showToast(); 
    guardarLocal();  
    });
});
})



verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display ="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Reservas</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("button");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none"; 
    });

    modalHeader.append(modalButton);

    reservas.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        `;

        modalContainer.append(carritoContent);

    });

    const total = reservas.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

    const totalBuying =document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total:€${total} `;

    modalContainer.append(totalBuying);




});
const guardarLocal = () =>{
    localStorage.setItem("cart", JSON.stringify(reservas));
};











