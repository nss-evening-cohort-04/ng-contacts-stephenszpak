"use strict";

app.controller("ContactListCtrl", function($scope, ContactFactory) {
	$scope.contacts = [];
	$scope.showHide = true;


	let gContacts = function() {
		ContactFactory.getContacts().then(function(fbContact) {
			$scope.contacts = fbContact;
		});
	};

	gContacts();

	$scope.deleteContact = function(contactId) {
		ContactFactory.deleteContact(contactId).then(function(response) {
			gContacts();
		});
	};
	
});