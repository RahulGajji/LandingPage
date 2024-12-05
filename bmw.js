let sliderCotainer = document.getElementById('sliderContainer')


let images = [

  "bmw_images/slider_image_1.jpg",
  "bmw_images/slider_image_2.jpg",
  "bmw_images/slider_image_3.jpg",
  "bmw_images/slider_image_4.jpg",
  "bmw_images/slider_image_5.jpg",
  "bmw_images/slider_image_6.jpg",
  "bmw_images/slider_image_7.jpg",


];

let i = 0;


setInterval(function(){


  sliderCotainer.src = images[i]

  i += 1;

  if(i > 6){
    i = 0
  }


},5000)