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

function pushPro(index, btn) {
    console.log("index", index)
    cart.push(baseProducts[index]);
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
    cartonaTotal += baseProducts[index].total;
    cartTotalPrice.innerHTML = cartonaTotal;
    updetlength();
    btn.innerHTML = "remove"
    btn.style.backgroundColor = " red";
}

function addCart(i) {
    let addBtn = document.querySelector(`.add${i}`);
    curIndex = i;
    if (addBtn.innerHTML == "Add Cart") {
        if (cart.length == 0) {
            pushPro(curIndex, addBtn);
        } else {
            let x = cart.indexOf(cart[curIndex]);
            if (x < 0) {
                pushPro(curIndex, addBtn);
            }
        }
    } else {
        let itemToRemove = cart.find(item => item.id === baseProducts[curIndex].id);
        let x = cart.filter(i => i.id != itemToRemove.id);
        cart = x;
        localStorage.setItem("cart", JSON.stringify(x));
        addBtn.style.backgroundColor = "#09c";
        addBtn.innerHTML = "Add Cart"
        updetlength()
    }

}


// cart counter does not reload auto until reload manual