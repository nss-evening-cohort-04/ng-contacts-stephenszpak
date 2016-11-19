"use strict";

app.controller("ContactViewCtrl", function($scope, $routeParams, ContactFactory) {
  $scope.selectedContact = {};
  let contactId = $routeParams.id;
  console.log("route params", contactId);

  ContactFactory.getSingleContact(contactId).then(function(oneContact) {
    oneContact.id = contactId;
    $scope.selectedContact = oneContact;
  });
});