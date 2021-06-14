// menu when click
var bar=document.getElementById("bars");
console.log(bars.nextElementSibling);
bar.onclick= function(){
    if(this.getAttribute("class")=="fas fa-bars")
    {
        this.nextElementSibling.style.cssText="display: flex;\
        flex-direction: column;\
        position: absolute;\
        width: 100%;\
        top:100%;\
        left:0px;\
        height:fit-content;\
        align-items: flex-start;\
        z-index: 5;\
        background-color:var(--background-color);";
        this.setAttribute("class","fas fa-stream");
    }
    else{
        this.nextElementSibling.style.display="none";
        this.setAttribute("class","fas fa-bars");
    }
}