let images=document.querySelectorAll(".image");
let spans=document.querySelectorAll("span");
console.log(images);
images.forEach(function(ele){
    ele.addEventListener("click",function(){
        sayhello(this);
    })
})
function sayhello(ele){
    removeactive();
    ele.style.width="58%";
    ele.children[0].style.visibility="visible";
}
function removeactive(){
    for(let i=0;i<images.length;i++)
    {
        spans[i].style.visibility="hidden";
        images[i].style.width="8%";
    }
}