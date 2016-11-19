"use strict";

app.controller("ContactEditCtrl", function($scope, $location, $routeParams, ContactFactory) {
  $scope.newContact = {};
  let contactId = $routeParams.id;
  console.log("route params", contactId);

  ContactFactory.getSingleContact(contactId).then(function(oneContact) {
    oneContact.id = contactId;
    $scope.newContact = oneContact;
  });


	$scope.addContact = function() {
		ContactFactory.editContact($scope.newContact).then(function(contactId) {
			$scope.newContact = {};
			$location.url("/contacts/list");
			});
	};
});