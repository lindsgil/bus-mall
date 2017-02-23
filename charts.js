'use strict';

var ctx = document.getElementById('chart').getContext('2d');

//var data = [12, 4, 9, 3, 100, 55, 31];

var totalProducts = JSON.parse(localStorage.totalProducts);

function getProductNames(totalProducts) {
  var productNames = [];

  for (var i = 0; i < totalProducts.length; i++) {
    productNames.push(totalProducts[i].name);
  }
  console.log('All Product Names: ', productNames);
  return productNames;
}

function getProductClicks(totalProducts) {
  var productClicks = [];

  for (var i = 0; i < totalProducts.length; i++) {
    productClicks.push(totalProducts[i].clicks);
  }
  console.log('All Product Clicks: ', productClicks);
  return productClicks;
}
// var data = [10, 5, 16, 100];
var clickData = getProductClicks(totalProducts);
var nameData = getProductNames(totalProducts);

var labelColors = ['blue', 'red', 'orange', 'purple', 'green', 'yellow', 'salmon'];

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: '# of Votes / Color',
      data: clickData,
      backgroundColor: 'navy',
    }],
  },
  options: {
    scales: {
    }
  }
};
var charts = new Chart(ctx, chartData);
