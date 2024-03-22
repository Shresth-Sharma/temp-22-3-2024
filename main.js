let width = window.innerWidth;
let height = window.innerHeight;
var item = document.getElementById("sweetframe");
item.src = `a/index.html?width=${width}&height=${height}`;
let onitem = false
let scrollitem = document.getElementById('sweetframe')
if(width/height > 1){
    document.getElementById('cssid').setAttribute('href', 'style.css')
}
else{
    document.getElementById('cssid').setAttribute('href', 'style1.css')
}
// scrollitem.addEventListener("mouseenter", function (e){
//     onitem = true
// })
// scrollitem.addEventListener("mouseleave", function (e){
//     onitem = false
// })
window.addEventListener("wheel", function (e) {
    // console.log(e)
    // if(onitem){
    //     window.scrollTo(0, d)
    //     if (e.deltaY > 0) item.scrollTop += 600;
    //     else item.scrollTop -= 600;
    // }
 });
a = 0
b = 1
window.scrollTo(0,0);
// height = height+height/8-height/10
height = width*1.7
function scrollb(){
    if(a < height/2){
        window.scrollTo(0,a);
        a+=b/2
        b+=0.1
    }
    else if(a < height){
        window.scrollTo(0,a);
        a+=b/2
        b-=0.1
    }
    else{
        clearInterval(c)
        d = a
    }
}
function scrolla(){
    c = setInterval(scrollb, 5)
}

