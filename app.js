'use strict';

//Set up an array of images from Assets folder
var imageArrayPath = [ 'img/assets/bag.jpg', 'img/assets/banana.jpg', 'img/assets/bathroom.jpg', 'img/assets/boots.jpg', 'img/assets/breakfast.jpg', 'img/assets/bubblegum.jpg', 'img/assets/chair.jpg', 'img/assets/cthulhu.jpg', 'img/assets/dog-duck.jpg', 'img/assets/dragon.jpg', 'img/assets/pen.jpg', 'img/assets/pet-sweep.jpg', 'img/assets/scissors.jpg', 'img/assets/shark.jpg', 'img/assets/sweep.png', 'img/assets/tauntaun.jpg', 'img/assets/unicorn.jpg', 'img/assets/usb.gif', 'img/assets/water-can.jpg', 'img/assets/wine-glass.jpg'];

var imageArrayName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//Variables to access elements from DOM
var picCont = document.getElementById('pic-cont');
var left = document.getElementById('left');
var cent = document.getElementById('cent');
var right = document.getElementById('right');
var resultsEl = document.getElementById('results');

// //Global Variables
var totClicks = 25;
var clicks = 0;
var totProducts = [];
var randomImageIndices = [];
var totViews = 0;

// //Define constructor for product images
function ProductImage(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/assets/' + name + '.jpg';
}
//
for (var i = 0; i < imageArrayName.length; i++) {
  var imageArray = imageArrayName[i];
  var productIm = new ProductImage(imageArray);
  totProducts.push(productIm);
}

// //Set up function to come up with a random number corresponding to imageArrayPath index
function getRandImage() {
  return Math.floor(Math.random() * (totProducts.length));
}

function displayThreeImages(){
//Function to display images
  var leftPic = getRandImage();
  var centPic = getRandImage();
  var rightPic = getRandImage();

  console.log('leftPic', leftPic);
  console.log('centPic', centPic);
  console.log('rightPic', rightPic);

  while (leftPic === centPic) {
    centPic = getRandImage();
  }
  while (rightPic === leftPic || rightPic === centPic) {
    rightPic = getRandImage();
  }
  console.log('pic-cont', picCont);

  // picCont.removeChild(left);
  // left = document.createElement('img');
  left.setAttribute('src', totProducts[leftPic].path);
  left.setAttribute('alt', totProducts[leftPic].name);
  console.log('left', left);
  totProducts[leftPic].views++;
  // picCont.appendChild('left');

  // picCont.removeChild(cent);
  // cent = document.createElement('img');
  cent.setAttribute('src', totProducts[centPic].path);
  cent.setAttribute('alt', totProducts[centPic].name);
  totProducts[centPic].views++;
  // picCont.appendChild('cent', cent);

  // picCont.removeChild(right);
  // right = document.createElement('img');
  right.setAttribute('src', totProducts[rightPic].path);
  right.setAttribute('alt', totProducts[rightPic].name);
  totProducts[rightPic].views++;
  // picCont.appendChild('right');

  //add event listener
  right.addEventListener('click', picClicks);
  cent.addEventListener('click', picClicks);
  left.addEventListener('click', picClicks);
};
displayThreeImages();
//container to append event listener

//click events
function picClicks() {
  if(clicks < totClicks ) {
    clicks++;
    console.log(event.target.alt + 'was clicked');

    for (var index = 0; index < totProducts.length; index++) {
      if (event.target.alt === totProducts[index].name) {
        totProducts[index].clicks += 1;
        console.log(totProducts[index].clicks);
      }
    }
    displayThreeImages();
  } else {
    displayList();
  }
};

function displayList() {
  for (var j = 0; j < totProducts.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = totProducts[j].name + ' has been clicked ' + totProducts[j].clicks;
    resultsEl.appendChild(liEl);
    localStorage.totalProducts = JSON.stringify(totProducts);
  }
  left.removeEventListener('click', picClicks);
  cent.removeEventListener('click', picClicks);
  right.removeEventListener('click', picClicks);
};
