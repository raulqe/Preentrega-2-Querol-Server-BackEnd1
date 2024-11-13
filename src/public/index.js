const socketClient= io();

const form= document.getElementById("form");
const nameInput= document.getElementById("name");
const priceInput= document.getElementById("price");
const procucts= document.getElementById("products");

form.onsubmit=(e)=>{
    e.preventDefault();
    const name=nameInput.value;
    const price=priceInput.value;
    socketClient.emit("newProduct",{name,price});
}

socketClient.on("arrayProducts",(array)=>{
    let InfProducts='';
    array.map((p)=>{
        InfProducts+= `<div class="ItemList"><p class="New-prod">Name: ${p.name}</p>   <p class="New-prod"> Price: ${p.price} </p> <br></div>`;
        products.innerHTML=`${InfProducts}`;
    })
})