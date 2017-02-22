'use strict';

//Set up an array of images from Assets folder
var imageArrayPath = [ 'img/assets/bag.jpg', 'img/assets/banana.jpg', 'img/assets/bathroom.jpg', 'img/assets/boots.jpg', 'img/assets/breakfast.jpg', 'img/assets/bubblegum.jpg', 'img/assets/chair.jpg', 'img/assets/cthulhu.jpg', 'img/assets/dog-duck.jpg', 'img/assets/dragon.jpg', 'img/assets/pen.jpg', 'img/assets/pet-sweep.jpg', 'img/assets/scissors.jpg', 'img/assets/shark.jpg', 'img/assets/sweep.png', 'img/assets/tauntaun.jpg', 'img/assets/unicorn.jpg', 'img/assets/usb.gif', 'img/assets/water-can.jpg', 'img/assets/wine-glass.jpg'];

// //Global Variables
var totClicks = 25;
var click = 0;
var totProducts = [];
var randomImageIndices = [];
//
// // Define variables to access elements from DOM
// var left = document.getElementById('left');
// var cent = document.getElementById('cent');
// var right = document.getElementById('right');
// var picCont = document.getElementById('pic-cont');
//
// //Define constructor for product images
function ProductImage(path) {
  this.path = path;
  this.views = 0;
  this.clicks = 0;
}
//
for (var i = 0; i < imageArrayPath.length; i++) {
  var imageArray = imageArrayPath[i];
  var productIm = new ProductImage(imageArray);
  totProducts.push(productIm);
}

// //Set up function to come up with a random number corresponding to imageArrayPath index
function getRandImages() {
  var randomImageIndices = [];
  while(randomImageIndices.length < 3) {
    Math.floor(Math.random() * (totProducts.length + 1));
    var possIndex = Math.floor(Math.random() * (totProducts.length + 1));
    console.log('possIndex', possIndex);
    if (randomImageIndices.indexOf(possIndex) === -1) {
      randomImageIndices.push(possIndex);
    }
  }
  return randomImageIndices;
  console.log('randomImageIndices', randomImageIndices);
}
getRandImages();
//
// //Set up function to procure a random number corresponding to imageArrayPath index
// function randImage() {
//   return Math.floor(Math.random() * totProducts.length);
// }
//
// //Function to display new images
// function displayPic() {
//   var leftIm = randImage();
//   var centIm = randImage();
//   var rightIm = randImage();
//
//   while (centIm === leftIm) {
//     centIm = randImage();
//   }
//   while (rightIm === centIm || rightIm === leftIm) {
//     rightIm = randImage();
//   }
//
//   var leftProd = totProducts[leftIm];
//   leftProd.views += 1;
//
//   var centProd = totProducts[centIm];
//   centProd.views += 1;
//
//   var rightProd = totProducts[rightIm];
//   rightProd.views += 1;
//
//   console.log('leftProd', leftProd);
// }
//
// displaypic();
// //For loop creating a new array with random images from above
// for (var i = 0; i < randomImageIndices.length; i++){
//   var imageString = randomImageIndices[i];
//   console.log('imageString', imageString);
//   var leftImage = randomImageIndices[0];
//   var centImage = randomImageIndices[1];
//   var rightImage = randomImageIndices[2];
// }
//
// //Function to show images
// function showLeftImage() {
//   document.write('<img src=" ' + leftImage + ' ">');
// }
//
// function showCentImage() {
//   document.write('<img src=" ' + centImage + ' ">');
// }
//
// function showRightImage() {
//   document.write('<img src=" ' + rightImage + ' ">');
// }
//
var k = 0;
var imageGen = [];
for (var i = 0; i < imageArrayPath.length; i++) {
  imageGen[i] = new Image();
  imageGen[i].src = imageArrayPath[i];
}

for (var i = 0; i < imageArrayPath.length; i++) {
  var newImage = new ChoiceImage(imageArrayPath[i].name, imageArrayPath[i].path);
  console.log('newImage', newImage);
}

imageArrayPath[0] = 'img/assets/bag.jpg';
imageArrayPath[1] = 'img/assets/banana.jpg';

function ChoiceImage(path) {
  this.path = path;
  this.clicks = 0;
  this.display = 0;
}

for (var i = 0; i < imageArrayPath.length; i++){
  var imageString = imageArrayPath[i];
  console.log(imageString);
}

var k = 0;
var imageGen = new Array();
for (var i = 0; i < imageArrayPath.length; i++) {
  imageGen[i] = new Image();
  imageGen[i].src = imageArrayPath[i];
}
var someImage = Math.round(Math.random() * (imageArrayPath.length - 1));
function showImage() {
  document.write('<img src=" ' + imageArrayPath[someImage] + ' ">');
}
var someImage2 = Math.round(Math.random() * (imageArrayPath.length - 1));
if (someImage2 === someImage) {
  var someImage2 = Math.round(Math.random() * (imageArrayPath.length - 1));
} else {
  function showImage2() {
    document.write('<img src=" ' + imageArrayPath[someImage2] + ' ">');
  }
}
var someImage3 = Math.round(Math.random() * (imageArrayPath.length - 1));
function showImage3() {
  if (someImage3 === someImage || someImage3 === someImage2) {
    var someImage3 = Math.round(Math.random() * (imageArrayPath.length - 1));
  } else {
    document.write('<img src=" ' + imageArrayPath[someImage3] + ' ">');
  }
}
//
//Set up function to come up with a random number corresponding to imageArrayPath index
function getRandImages() {
  var randomImageIndices = [];
  while(randomImageIndices.length < 3) {
    Math.floor(Math.random() * (totProducts.length + 1));
    var possIndex = Math.floor(Math.random() * (totProducts.length + 1));
    console.log('possIndex', possIndex);
    if (randomImageIndices.indexOf(possIndex) === -1) {
      randomImageIndices.push(possIndex);
    }
  }
  return randomImageIndices;
}
//
// console.log('someImage3', someImage3);
// console.log('someImage', someImage);
// console.log('someImage2', someImage2);
// for (var j = 0; j < 3; j++) {
//   showImage(j);
// }
