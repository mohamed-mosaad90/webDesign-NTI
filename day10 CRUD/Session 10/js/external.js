let name = document.getElementById("proName");
let price = document.getElementById("proPrice");
let category = document.getElementById("proCategory");
let desc = document.getElementById("proDesc");
let btn = document.getElementById("btn");
let tbody = document.getElementById("tbody")
let productContainer;
if (localStorage.getItem("products")) {
    console.log("okk");
    productContainer = JSON.parse(localStorage.getItem("products"));
    disPlay();
} else {

    productContainer = [];

}
btn.onclick = function () {
    let product = {
        name: name.value,
        price: price.value,
        category: category.value,
        desc: desc.value,
    }
    productContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productContainer))
    disPlay();

}

function disPlay() {
    let rowsContainer = ``;
    for (let i = 0; i < productContainer.length; i++) {
        rowsContainer += `
                  <tr>
                <td>${i + 1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td>
                  <button class="btn delete">Delete</button>
                  <button class="btn update">Update</button>
                </td>
              </tr>
        `
        tbody.innerHTML = rowsContainer;
    }

}