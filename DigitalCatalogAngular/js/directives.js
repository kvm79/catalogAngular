/*****
	directives for slide templates
	controls HTML rendering
	can be used on html elements, attributes, css classes, comments
	'slide1' allows you to bind elements <slide1></slide1> into html
*****/
angular.module('carouselApp',['carouselApp.directives']);
var carouselAppModule = angular.module('carouselApp.directives', []);

carouselAppModule.directive('slide1', function() {
    return { 
        restrict:'E', //restrict this directive to elements
        replace:true,
        templateUrl:'slide1.html'
    }
}),

carouselAppModule.directive('slide2', function() {
    return { 
        restrict:'E',
        replace:true,
        templateUrl:'slide2.html'
    }
}),

carouselAppModule.directive('slide3', function() {
    return { 
        restrict:'E',
        replace:true,
        templateUrl:'slide3.html'
    }
}),

carouselAppModule.directive('slide4', function() {
    return { 
        restrict:'E',
        replace:true,
        templateUrl:'slide4.html'
    }
}),

carouselAppModule.directive('slide5', function() {
    return { 
        restrict:'E',
        replace:true,
        templateUrl:'slide5.html'
    }
})