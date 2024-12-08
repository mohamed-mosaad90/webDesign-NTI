let items = document.querySelectorAll(".item");
let imgs = document.querySelectorAll(".img-con img");
let layer = document.querySelector(".layer");
let next = document.querySelector(".fa-angle-right");
let prev = document.querySelector(".fa-angle-left");
let close = document.querySelector(".fa-times-circle");

let currIndex = 0;

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    layer.classList.replace("d-none", "d-flex");
    let imgSrc = imgs[i].getAttribute("src");

    document.querySelector(".img-box").style.cssText = `
             background-image: url(../${imgSrc});
            background-position: center center;
            background-size: cover;
        `;
    currIndex = i;
  });
}

next.addEventListener("click", function () {
  slide(1);
});
prev.addEventListener("click", function () {
    slide(-1);
});
close.addEventListener("click", function () {
  layer.classList.replace("d-flex", "d-none");
});

function slide(i) {
  currIndex = currIndex + i;

  if (currIndex == imgs.length) {
    currIndex = 0;
  }

  if (currIndex < 0) {
    currIndex = imgs.length - 1;
  }

  let imgSrc = imgs[currIndex].getAttribute("src");
  document.querySelector(".img-box").style.cssText = `
               background-image: url(../${imgSrc});
              background-position: center center;
              background-size: cover;
          `;
}


document.addEventListener("keydown",function(e){
    console.log(e.key);
    if(e.key == "ArrowRight" || e.key =="d"){
        slide(1);
    }else if(e.key == "ArrowLeft"){
        slide(-1)
    }
    else if(e.key== "Escape"){
        layer.classList.replace("d-flex", "d-none");
    }
})