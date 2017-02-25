'use strict';

var ctx = document.getElementById('chart').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');

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

function getProductViews(totalProducts) {
  var productViews = [];

  for (var i = 0; i < totalProducts.length; i++) {
    productViews.push(totalProducts[i].views);
  }
  console.log('All Product Views: ', productViews);
  return productViews;
}

// var data = [10, 5, 16, 100];
var clickData = getProductClicks(totalProducts);
var nameData = getProductNames(totalProducts);
var viewData = getProductViews(totalProducts);

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: '# of Clicks',
      data: clickData,
      backgroundColor: '#ffcbd0',
    },{
      label: '# of Views',
      data: viewData,
      backgroundColor: 'grey',
    }],
  },
  options: {
    scales: {
    }
  }
};
var charts = new Chart(ctx, chartData);
