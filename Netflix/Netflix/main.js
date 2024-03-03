let curr_slide = 1;

sliderElemnt = document.getElementById("slider");
total_slides = sliderElemnt.childElementCount;
// console.log(total_slides);

function next() {
  if (curr_slide < total_slides) {
    curr_slide++;
    slide_show();
  }
}

function prev() {
  if (curr_slide > 1) {
    curr_slide--;
    slide_show();
  }
}

function slide_show() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < total_slides; index++) {
    const element = slides[index];
    if (curr_slide == index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}
