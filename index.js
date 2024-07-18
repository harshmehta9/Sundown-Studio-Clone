const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

let fixedImage = document.querySelector("#fixed-image");
let elemContainer = document.querySelector("#elem-container");
let elem1 = document.querySelector("#elem1");
// console.log(elem1)
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");

elemContainer.addEventListener("mouseenter", ()=>{
    fixedImage.style.display = "unset";
})

elemContainer.addEventListener("mouseleave", ()=>{
    fixedImage.style.display = "none";
})


elem1.addEventListener("mouseenter", ()=>{
    // console.log(elem1)
    let image = elem1.getAttribute("data-image")
    // console.log(image)
    // fixedImage.style.backgroundImage = `url{${image}}`
})


let elems = document.querySelectorAll(".elem");
// console.log(elems);

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute('data-image');
        console.log(image);
        fixedImage.style.backgroundImage = `url(${image})`
    })
})