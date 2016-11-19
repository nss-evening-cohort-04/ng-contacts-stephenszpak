"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG) {

	var getContacts = function() {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(response) {
				console.log(response);
				let contacts = [];
				Object.keys(response).forEach(function(key) {
					response[key].id = key;
					contacts.push(response[key]);
				});
				resolve(contacts);
			})
			.error(function(errorResponse) {
				reject(errorResponse);
			});
		});
	};

	var addNewContact = function(newContact) {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
				JSON.stringify({
					name: newContact.name,
					phone: newContact.phone,
					email: newContact.email,
					url: newContact.url,
					social: newContact.social,
					address: newContact.address,
					citystate: newContact.citystate
				})
			)
			.success(function(postResponse) {
				resolve(postResponse);
			})
			.error(function(postError) {
				reject(postError);
			});
		});
	};


	return {
		getContacts : getContacts,
		addNewContact : addNewContact
	};
});