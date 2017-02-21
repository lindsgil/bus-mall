'use strict';

//Set up an array of images from Assets folder

var imageArray = [
  {
    path: 'img/assets/bag.jpg',
    name: 'bag',
  },
  {
    path: 'img/assets/banana.jpg',
    name: 'banana',
  },
  {
    path: 'img/assets/bathroom.jpg',
    name: 'bathroom',
  },
  {
    path: 'img/assets/boots.jpg',
    name: 'boots',
  },
  {
    path: 'img/assets/breakfast.jpg',
    name: 'breakfast',
  },
  {
    path: 'img/assets/bubblegum.jpg',
    name: 'bubblegum',
  },
  {
    path: 'img/assets/chair.jpg',
    name: 'chair',
  },
  {
    path: 'img/assets/cthulhu.jpg',
    name: 'cthulhu',
  },
  {
    path: 'img/assets/dog-duck.jpg',
    name: 'dog-duck',
  },
  {
    path: 'img/assets/dragon.jpg',
    name: 'dragon',
  },
  {
    path: 'img/assets/pen.jpg',
    name: 'pen',
  },
  {
    path: 'img/assets/pet-sweep.jpg',
    name: 'pet-sweep',
  },
  {
    path: 'img/assets/scissors.jpg',
    name: 'scissors',
  },
  {
    path: 'img/assets/shark.jpg',
    name: 'shark',
  },
  {
    path: 'img/assets/sweep.png',
    name: 'sweep',
  },
  {
    path: 'img/assets/tauntaun.jpg',
    name: 'tauntaun',
  },
  {
    path: 'img/assets/unicorn.jpg',
    name: 'unicorn',
  },
  {
    path: 'img/assets/usb.gif',
    name: 'usb',
  },
  {
    path: 'img/assets/water-can.jpg',
    name: 'water-can',
  },
  {
    path: 'img/assets/wine-glass.jpg',
    name: 'wine-glass',
  },
];

function getRandImages() {
  var randomImageIndices = [];
  while(randomImageIndices.length < 3) {
    Math.floor(Math.random() * (imageArray.length + 1));
    var possIndex = Math.floor(Math.random() * (imageArray.length + 1));
    console.log('possIndex', possIndex);
    if (randomImageIndices.indexOf(possIndex) === -1) {
      randomImageIndices.push(possIndex);
    }
  }
  return randomImageIndices;
}

for (var i = 0; i < randomImageIndices.length; i++){
  var imageString = randomImageIndices[i];
  console.log('imageString', imageString);
}
//
// var k = 0;
// var imageGen = new Array();
// for (var i = 0; i < imageArray.length; i++) {
//   imageGen[i] = new Image();
//   imageGen[i].src = imageArray[i];
// }

//
// for (var i = 0; i < imageArray.length; i++) {
//   var newImage = new ChoiceImage(imageArray[i].name, imageArray[i].path);
//   console.log('newImage', newImage);
// }

// imageArray[0] = 'img/assets/bag.jpg';
// imageArray[1] = 'img/assets/banana.jpg';
// imageArray[2] = 'img/assets/bathroom.jpg';
// imageArray[3] = 'img/assets/boots.jpg';
// imageArray[4] = 'img/assets/breakfast.jpg';
// imageArray[5] = 'img/assets/bubblegum.jpg';
// imageArray[6] = 'img/assets/chair.jpg';
// imageArray[7] = 'img/assets/cthulhu.jpg';
// imageArray[8] = 'img/assets/dog-duck.jpg';
// imageArray[9] = 'img/assets/dragon.jpg';
// imageArray[10] = 'img/assets/pen.jpg';
// imageArray[11] = 'img/assets/pet-sweep.jpg';
// imageArray[12] = 'img/assets/scissors.jpg';
// imageArray[13] = 'img/assets/shark.jpg';
// imageArray[14] = 'img/assets/sweep.png';
// imageArray[15] = 'img/assets/tauntaun.jpg';
// imageArray[16] = 'img/assets/unicorn.jpg';
// imageArray[17] = 'img/assets/usb.gif';
// imageArray[18] = 'img/assets/water-can.jpg';
// imageArray[19] = 'img/assets/wine-glass.jpg';
//
// function ChoiceImage(imageName, path) {
//   this.imageName = imageName;
//   this.path = path;
//   this.clicks = 0;
//   this.display = 0;
// }
//
// // for (var i = 0; i < imageArray.length; i++){
// //   var imageString = imageArray[i];
// //   console.log(imageString);
// // }
//
// var k = 0;
// var imageGen = new Array();
// for (var i = 0; i < imageArray.length; i++) {
//   imageGen[i] = new Image();
//   imageGen[i].src = imageArray[i];
// }
// var someImage = Math.round(Math.random() * (imageArray.length - 1));
// function showImage() {
//   document.write('<img src=" ' + imageArray[someImage] + ' ">');
// }
// var someImage2 = Math.round(Math.random() * (imageArray.length - 1));
// if (someImage2 === someImage) {
//   var someImage2 = Math.round(Math.random() * (imageArray.length - 1));
// } else {
//   function showImage2() {
//     document.write('<img src=" ' + imageArray[someImage2] + ' ">');
//   }
// }
// var someImage3 = Math.round(Math.random() * (imageArray.length - 1));
// function showImage3() {
//   if (someImage3 === someImage || someImage3 === someImage2) {
//     var someImage3 = Math.round(Math.random() * (imageArray.length - 1));
//   } else {
//     document.write('<img src=" ' + imageArray[someImage3] + ' ">');
//   }
// }
// console.log('someImage3', someImage3);
// console.log('someImage', someImage);
// console.log('someImage2', someImage2);
// for (var j = 0; j < 3; j++) {
//   showImage(j);
// }
