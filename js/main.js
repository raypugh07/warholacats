let i = 0;
let images = [];

images[0] = './assets/erosandvibes.jpg';  //eros and vibes album cover
images[1] = 'https://www.tapchief.com/blog/wp-content/uploads/2018/02/Pexels.jpg';  //stock photos for now
images[2] = 'http://sfwallpaper.com/images/high-quality-images-6.jpg';

// console.log(images)

function setImage(){
  document.slideshow.src = images[i];
}

window.onload = setImage;

const nextBtn = document.querySelector('.next-btn');
const image = document.querySelector('.image');

nextBtn.addEventListener('click', () => {

  if(!image.classList.contains('image')) return;

  if (i < images.length - 1) {
    ++i;
    image.classList.remove('image');
    setTimeout(()=>{
     document.slideshow.src = images[i];
    }, 298)
    setTimeout(()=>{
      image.classList.add('image');
    }, 350)
 
  } else {
     i = 0;
     image.classList.remove('image');
    setTimeout(()=>{
     document.slideshow.src = images[i];
    }, 298)
    setTimeout(()=>{
      image.classList.add('image');
    }, 350)

  }
  
})

const prevBtn = document.querySelector('.prev-btn');

prevBtn.addEventListener('click', () => {

  if(!image.classList.contains('image')) return;
 
  if (i === 0) {
     i = images.length - 1;
     image.classList.remove('image');
      setTimeout(()=>{
     document.slideshow.src = images[i];
    }, 298)
    setTimeout(()=>{
      image.classList.add('image');
    }, 350)

  } else {
      --i;
      image.classList.remove('image');
    setTimeout(()=>{
     document.slideshow.src = images[i];
    }, 298)
    setTimeout(()=>{
      image.classList.add('image');
    }, 350)
  }
  
})