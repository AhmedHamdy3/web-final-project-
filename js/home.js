// cahnge the image every x second in landing
var element= document.getElementById("element");
var pictures=[
    "images/bg1.png",
    "images/bg1.jpg",
    "images/bg8.jpg",
    "images/bg9.jpg",
    "images/bg10.jpg",
];
// console.log(pictures[2]);
function changeImage(element,pictures){
    setInterval(function(){
        var rand =Math.floor(Math.random() * pictures.length);
        element.src=pictures[rand];
    },2000)
}
changeImage(element,pictures);
// end cahnge the image every x second