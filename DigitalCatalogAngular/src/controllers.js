'use strict'; 
	  
/*********************************************************
 Angular Module
 Container for controllers, services, filters, directives
 Modules don't have main method
 Module specify how an app should be bootstrapped
 [ ] = dependencies
*********************************************************/ 
var app =  angular.module('carouselApp', ['angular-carousel','ngRoute','ngSanitize', 'FBAngular', 'ui.bootstrap'])

/*********************************************************
 Filter for video src attribute
 Trusted Video URLs
*********************************************************/  
app.filter('trusted', ['$sce', function ($sce) {
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
}])

/*********************************************************
 Sharing data between controllers

*********************************************************/ 
app.factory('data', function() {
    
});

/*********************************************************
 Angular Module Config
 $routeProvider service
*********************************************************/ 
app.config(function($routeProvider) {
	$routeProvider
   .when('/', {
    templateUrl: 'partials/carousel.html',
    controller: 'CarouselListCtrl',
    
  })
  .when('/clothing', {
    templateUrl: 'partials/carousel.html',
    controller: 'CarouselListCtrl',
    
  })
  .when('/shoes', {
    templateUrl: 'partials/shoes.html',
    controller: 'ShoesController',
   
  })
   .when('/accessories', {
    templateUrl: 'partials/accessories.html',
    controller: 'AccessoriesController',
    
  })
   .when('/house', {
    templateUrl: 'partials/house.html',
    controller: 'HouseController',
   
  })
   .when('/sale', {
    templateUrl: 'partials/sale.html',
    controller: 'SaleController',
   
  })
   .when('/blog', {
    templateUrl: 'partials/blog.html',
    controller: 'BlogController',
   
  })
   .otherwise({
        redirectTo: '/'
  });
  
});

/*********************************************************
 Main Controller: Contructor function
 Attached to the DOM by ng-controller in the HTML
 $scope = An object
 slides = Properties (ex: slide.title)
 Properties contain the View model
 Once instantiated all of $scope properties are available to the template in the Dom where 'CarouselListCtrl' is added
*********************************************************/ 
app.controller('CarouselListCtrl', function($scope, $sce, $http, $location, Fullscreen) {
	
  /*********************************************************
    $location: Angular service
	Highlight active nav links
  *********************************************************/
  $scope.isCurrentPath = function (path) {
      return $location.path() == path;
  };
  
  /*********************************************************
    Fullscreen: Angular service
  *********************************************************/
  $scope.isFullScreen = false;
  $scope.goFullScreenViaWatcher = function() {
      $scope.isFullScreen = !$scope.isFullScreen;
  };
	 	
  /*********************************************************
    $http: Angular service
	Get json data
  **********************************************************/
  $scope.slides = [];
  $scope.slides = 
  $http.get('data/products.json')
	 .then(function(result){
		$scope.slides = result.data;                
	  });
	
  $scope.slide = $scope.slides[0];

  /*********************************************************
    Angular UI Carousel
	Function: prev and next buttons
	Function: swipe capability for tablets and mobile
  *********************************************************/
  $scope.slideIndex = 0;
  $scope.prev = function() {
    $scope.slideIndex--;
  }
  $scope.next = function() {
    $scope.slideIndex++;
  }
  $scope.swipe = true;
  $scope.toggleSwipe = function() {
    $scope.swipe = !$scope.swipe;
  }
  
  /*********************************************************
  	Image Mouseover/Mouseout
  *********************************************************/
   $scope.mouseOver = function(){
        this.hoverImg = true;
   };

   $scope.mouseOut = function(){
        this.hoverImg = false;
   };
  
   /*********************************************************
	  Accordion Data
   *********************************************************/
    $scope.groups = [
			 {
			headline: "diam noumy entra 1",
			textLink: "Lorem ipsum dolor 1",
			imgS: "images/accordion_img1_sm.jpg",
			imgL: "images/accordion_img1_lg.jpg",
			url: "http://www.zappos.com",
			open: true
		},
		{
		   headline: "diam noumy entra 2",
		   textLink: "Lorem ipsum dolor 2",
		   imgS: "images/accordion_img2_sm.jpg",
		   imgL: "images/accordion_img2_lg.jpg",
		   url: "http://www.placekittens.com",
		   open: false
		},
		{
			headline: "diam noumy entra 3",
			textLink: "Lorem ipsum dolor 3",
			imgS: "images/accordion_img3_sm.jpg",
			imgL: "images/accordion_img3_lg.jpg",
			url: "http://www.google.com",
			open: false
		}
	  ]
	  
});

/*********************************************************
 Clothing Controller: Contructor function
*********************************************************/
/*app.controller('ClothingController', function($scope) {
     $scope.message = "clothing page";
 });*/

/*********************************************************
 Shoes Controller: Contructor function
*********************************************************/ 
app.controller('ShoesController', function($scope, data) {
      $scope.message = "shoes page";
 });

/*********************************************************
 Accessories Controller: Contructor function
*********************************************************/ 
app.controller('AccessoriesController', function($scope, data) {
      $scope.message = "accessories page";
 });

/*********************************************************
 House Controller: Contructor function
*********************************************************/ 
app.controller('HouseController', function($scope, data) {
     $scope.message = "house page";
 });
 
/*********************************************************
 Sale Controller: Contructor function
*********************************************************/ 
app.controller('SaleController', function($scope, data) {
     $scope.message = "sale page";
 });
 
/*********************************************************
 Blog Controller: Contructor function
*********************************************************/ 
app.controller('BlogController', function($scope, data) {
     $scope.message = "blog page";
 });
 
