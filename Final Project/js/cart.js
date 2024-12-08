let cartTable = document.querySelector(".tbody")
let cartCount = document.querySelector(".cartCounter")
let cartTotalPrice = document.querySelector(".totalPrice")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartTotalPrice);

// let getFinalData = JSON.parse(localStorage.getItem("cart"))

function updetlength() {
    cartCount.innerHTML = cart.length
}
updetlength()


function displayCart() {
    let cartona = ``;
    console.log(cart);

    cart.forEach((ele, i) => {

        cartona += `
            <tr>
            <td colspan="2">
            <ul>
            <li><img src="${ele.image}" alt=""></li>
            <li>${ele.name}</li>
            </ul>
            </td>
            <td><input type="number" id="editInput-${i}" value="1"></td>
            <td id='price-${i}'>${ele.price}</td>
            <td id='total-${i}'>$${ele.total}</td>
            <td><button  onClick="editItem(${i})">Edit</button></td>
            <td><button onClick="deleteItem(${i})">Delete</button></td>
            </tr>
            `
    })
    cartTable.innerHTML = cartona;
}
displayCart()


function deleteItem(i) {

    cart.splice(i, 1);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart))
    updetlength()
    displayCart()

}
function editItem(i) {
    let editInput = document.getElementById(`editInput-${i}`).value;
    let ediTotal = document.getElementById(`total-${i}`)
    let getTotal = editInput * cart[i].price;
    ediTotal.innerHTML = getTotal;


    cart[i].total = getTotal
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);

    updetlength()

}
