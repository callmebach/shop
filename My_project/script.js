const itemSliderbar = document.querySelectorAll(".category-left-li")
itemSliderbar.forEach(function(menu,index) {
    menu.addEventListener("click", function() {
        menu.classList.toggle("block")
    })
})