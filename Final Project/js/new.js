let baseProducts = JSON.parse(localStorage.getItem("products"))
let disContainer = document.querySelector(".productContainer")
let cartCount = document.querySelector(".cartCounter")
let cartTotalPrice = document.querySelector(".totalPrice")
let cartonaTotal = 0;
let curIndex = 0

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updetlength() {
    cartCount.innerHTML = cart.length
}
updetlength()



function displayproduct() {
    let cartona = ``;
    baseProducts.map((ele, i) => {
        // console.log(ele);

        if (i < 8) {
            cartona += `
                        <div class="productCard">
                        <img src="${ele.image}" alt="product">
                        <span>&dollar;${ele.price}</span>
                        <small>${ele.type}</small>
                        <h4>${ele.name}</h4>
                        <button class="add${i}" onClick="addCart(${i})">Add Cart</button>
                        </div>
                        `
        }
    })
    disContainer.innerHTML = cartona;

}
// function getTotalheader() {
//     cart.reduce((accumulator, currentValue)=>{

// console.log(accumulator);
// // console.log(currentValue);


//     })

//     // cartTotalPrice.innerHTML = getTotal

// }
// getTotalheader()
displayproduct()

// function pushPro(index, btn) {
//     console.log("index", index)
//     cart.push(baseProducts[index]);
//     console.log(cart)
//     localStorage.setItem("cart", JSON.stringify(cart))
//     cartonaTotal += baseProducts[index].total;
//     cartTotalPrice.innerHTML = cartonaTotal;
//     updetlength();
//     btn.innerHTML = "remove"
//     btn.style.backgroundColor = " red";
// }

// function addCart(i) {
//     let addBtn = document.querySelector(`.add${i}`);
//     curIndex = i;
//     if (addBtn.innerHTML == "Add Cart") {
//         // let copyCart = { ...cart[i] }
//         // let checkCart = cart.some((ele) => {
//         //     ele.id === copyCart.id

//         // })
//         // if (checkCart != true) {
//         if (cart.length == 0) {
//             pushPro(curIndex, addBtn);
//         } else {
//             let x = cart.indexOf(cart[curIndex]);
//             if (x != -1) {
//                 pushPro(curIndex, addBtn);
//                 console.log("sss")
//             }
//         }
//     } else {
//         console.log("inner remove", curIndex);
//         console.log("inner remove", cart[curIndex].id);

//         let x = cart.filter(i => i.id != cart[curIndex].id);
//         console.log(x);

//         localStorage.setItem("cart", JSON.stringify(x))
//         addBtn.style.backgroundColor = "#09c";
//         addBtn.innerHTML = "Add Cart"
//         updetlength()
//     }

// }


// cart counter does not reload auto until reload manual

function addCart(i) {
    let addBtn = document.querySelector(`.add${i}`);
    curIndex = i;

    // Check if the item is already in the cart
    let isItemInCart = cart.some((item) => item.id === baseProducts[curIndex].id);

    if (!isItemInCart) {
        if (addBtn.innerHTML === "Add Cart") {
            // Item not found in the cart, proceed to add it
            pushPro(curIndex, addBtn);
        }
    } else {
        // Item is already in the cart, let's remove it

        // Store the item to be removed before filtering
        let itemToRemove = cart.find(item => item.id === baseProducts[curIndex].id);

        console.log("inner remove", itemToRemove.id); // Now this will log the correct item ID

        // Remove the item from the cart
        let updatedCart = cart.filter(item => item.id !== itemToRemove.id); // remove item by id

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cart = updatedCart; // Update the cart array after removal

        // Update button and UI
        addBtn.style.backgroundColor = "#09c";
        addBtn.innerHTML = "Add Cart";
        updetlength(); // Update the cart length display
    }
}


function pushPro(index, btn) {
    console.log("Adding to cart: ", index);

    // Add the selected product to the cart
    cart.push(baseProducts[index]);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update total price
    cartonaTotal += baseProducts[index].total;
    cartTotalPrice.innerHTML = cartonaTotal;

    // Update cart length display
    updetlength();

    // Change button text to "remove" and update style
    btn.innerHTML = "remove";
    btn.style.backgroundColor = "red";
}
