const header = document.querySelector('header')
window.addEventListener('scroll', function() {
    x = window.pageYOffset
    if(x > 0) {
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')
    }
})


const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let index = 0
let imgNumber = imgPosition.length
// console.log(imgPosition)
imgPosition.forEach(function(image, index) {
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener('click', function() {
        slider (index)
    })
})

function imgSlide (){
    index++;
    if (index >= imgNumber) {
        index = 0
    }
    slider (index)
}

function slider (index) {
    imgContainer.style.left = "-" + index*100 + "%"

    const dotActive = document.querySelector('.active')
    dotActive.classList.remove('active')
    dotItem[index].classList.add('active')
}

setInterval(imgSlide, 5000)

const itemSliderbar =document.querySelectorAll(".category-left-li")
itemSliderbar.forEach(function(menu,index) {
    menu.addEventListener("click", function() {
        menu.classList.toggle("block")
    })
})