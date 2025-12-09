const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");


open.addEventListener("click",function(Event){
    Event.preventDefault();
    modal_container.classList.add('show');
    
})
close.addEventListener("click",function(Event){
    Event.preventDefault();
    modal_container.classList.remove('show');
    
})

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

img1.addEventListener("mouseover", function () {
    img1.src = "assets/maps/map11.png";
});

img1.addEventListener("mouseout", function () {
    img1.src = "assets/maps/map1.png";

})

img2.addEventListener("mouseover", function () {
    img2.src = "assets/maps/map22.png";
});

img2.addEventListener("mouseout", function () {
    img2.src = "assets/maps/map2.png";

})
img3.addEventListener("mouseover", function () {
    img3.src = "assets/maps/map33.png";
});

img3.addEventListener("mouseout", function () {
    img3.src = "assets/maps/map3.png";

})
img4.addEventListener("mouseover", function () {
    img4.src = "assets/maps/map44.png";
});

img4.addEventListener("mouseout", function () {
    img4.src = "assets/maps/map4.png";

})
img5.addEventListener("mouseover", function () {
    img5.src = "assets/maps/map55.png";
});

img5.addEventListener("mouseout", function () {
    img5.src = "assets/maps/map5.png";

})
