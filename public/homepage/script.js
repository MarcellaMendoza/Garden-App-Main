const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide) 
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

function moveToNextSlide() {
  hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
  slidePosition++
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}
function moveToPrevSlide() {
  hideAllSlides()  
  
  if (slidePosition === 0) {
    slidePosition =totalSlides -1
  } else {
    slidePosition--
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
  }
}


// async function asyncAPICALL() {
//   try {
//      GET /v1/plants
//      Host: https://api.floracodex.com/
    
//      Authorization: Bearer 6268d3cf9eb9d5c1fd3ad1c4
// // //         let res = await fetch("https://api.floracodex.com/")
// // //     let jsonObj = await res.json()
// // //     console.log(jsonObj)
// // //   }catch (err) {
// // //     console.log(err)
//   }
// }

// asyncAPICALL()