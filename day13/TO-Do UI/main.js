let input = document.getElementById("userInput")
let homeContent = document.getElementById('homeContent')
let searchInput = document.getElementById("searchInput")
console.log(input.value);
let array = [];

function addItem() {
  array.push(input.value)
  input.value = '';
  display()
}
function display() {
  let cartona = ``;

  array.forEach((ele, i) => {
    cartona += `
          <div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
          >
            <p id="item" class="m-0 p-0">${ele}</p>
            <i class="fa-sharp fa-solid fa-trash "onClick="deleteItem(${i})"></i>
          </div>
        </div>
        `
  })
  homeContent.innerHTML = cartona

}

function deleteItem(index) {
  array.splice(index, 1);
  display()
}
searchInput.addEventListener("input", (elInput) => {
  searchItem(elInput.target.value
  )
})
function searchItem(searchValue) {
  let cartona = ``;

  array.forEach((ele, i) => {
    if (ele.tolowercase().includes(searchValue.tolowercase())) {
      cartona += `
          <div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center"
          >
            <p id="item" class="m-0 p-0">${ele}</p>
            <i class="fa-sharp fa-solid fa-trash "onClick="deleteItem(${i})"></i>
          </div>
        </div>
        ` }
  })
  homeContent.innerHTML = cartona;



}