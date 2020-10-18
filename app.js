var app = angular
    .module('BookRentalApp', [])
    .controller('BookRentalAddController', BookRentalAddController)
    .controller('BookRentalShowController', BookRentalShowController)
    .service('BookRentalService', BookRentalService)
    

     
	.directive('firstDirective', function()  {
	function linkedFunction($scope, element, attributes)  {
		$scope.text = " Read-Explore-Feel ";
		
		$scope.changeText = function (newText) {
			$scope.text = newText;
		}
	}
	return  {
		link : linkedFunction,
		template : '<span ng-click="changeText"> {{  text  }}</span>',
		
	};
});
app.controller('mycontroller', function () {
});






app.factory('myFactory', function () {
var displayFact;
var addMSG = function (msg) {
displayFact = ' Welcome ' + msg;
}
return {
setMSG: function (msg) {
addMSG(msg);
},
getMSG: function () {
return displayFact;
}
};
});
app.controller("myCtrl", function ($scope,  myFactory) {

myFactory.setMSG("Readers");

 

$scope.myCollections = [
myFactory.getMSG(),

];
});
	
   



BookRentalAddController.$inject = ['BookRentalService'];
function BookRentalAddController(BookRentalService) {
    var book = this;
	
	book.name = '';
    book.authorname = '';
    
	book.year = '';
    book.public1= '';
   
    book.addItem = function () {
        BookRentalService.addItem(book.name, book.authorname,  book.year, book.public1, );
    };
	
}

BookRentalShowController.$inject = ['BookRentalService'];
function BookRentalShowController(BookRentalService) {
	
	
    var showList = this;
    showList.items = BookRentalService.getItems();
    showList.removeItem = function (itemIndex) {
        BookRentalService.removeItem(itemIndex);
    };
}
function BookRentalService() {
    var service = this;
	
var items = [{name:"Harry Potter and the Half-Blood Prince",authorname:"JK Rowling",year:"2005",public1:"Original"}];
    service.addItem = function (name, authorname, year,public1) {
        var item = { name: name, authorname: authorname,year:year ,public1:public1 };
        items.push(item);
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };
    service.getItems = function () {
        return items;
    };
}

