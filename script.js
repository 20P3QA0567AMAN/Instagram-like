var box = document.querySelector("#container")
var icon = document.querySelector("i")

box.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%, -50%) scale(1)'
    setTimeout(function () {
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    },2000)
})

