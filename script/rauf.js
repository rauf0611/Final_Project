var sliderImages = document.querySelectorAll ('.lenta img');
var slider = document.querySelector(".mainSlider img");
var rightBtn = document.querySelector('.mainSlider .fa-chevron-right');
var leftBtn = document.querySelector('.mainSlider .fa-chevron-left');

for(var i = 0 ; i < sliderImages.length; i++){
    sliderImages[i].addEventListener("click", function() {
        document.querySelector('.lenta img.active').classList.remove("active")

        
        var clickedImageSrc = this.getAttribute("src");
        slider.setAttribute("src", clickedImageSrc);

        this.classList.add("active");
    })
}

// add click Right Btn
rightBtn.addEventListener("click", function(){
    var activeImg = document.querySelector('.lenta img.active');
    activeImg.classList.remove("active");
    if(activeImg.nextElementSibling){
        activeImg.nextElementSibling.classList.add("active");
        slider.setAttribute("src", activeImg.nextElementSibling.getAttribute("src"));
    }else{
        sliderImages[0].classList.add("active");
        slider.setAttribute("src",sliderImages[0].getAttribute("src"));
    }
})

// add click Right Btn
leftBtn.addEventListener("click", function(){
    var activeImg = document.querySelector('.lenta img.active');
    activeImg.classList.remove("active");
    if(activeImg.previousElementSibling){
        activeImg.previousElementSibling.classList.add("active");
        slider.setAttribute("src", activeImg.previousElementSibling.getAttribute("src"));
    }else{
        sliderImages[sliderImages.length -1].classList.add("active");
        slider.setAttribute("src",sliderImages[sliderImages.length -1].getAttribute("src"));
    }
});