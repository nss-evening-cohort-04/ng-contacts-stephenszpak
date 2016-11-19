"use strict";

app.controller("ContactCtrl", function($scope, ContactFactory){
	$scope.welcome = "hello";
	$scope.newContact = {};
	$scope.contacts = [];
	$scope.showHide = true;


	let gContacts = function() {
		ContactFactory.getContacts().then(function(fbContact) {
			$scope.contacts = fbContact;
		});
	};

	gContacts();

		$scope.contactList = function() {
			$scope.showHide = true;
		};

		$scope.moreInfo = function() {
		$scope.showHide = false;
	};

	$scope.addContact = function() {
		ContactFactory.addNewContact($scope.newContact).then(function(contactId) {
			gContacts();
			$scope.newContact = "";
			});
	};



});