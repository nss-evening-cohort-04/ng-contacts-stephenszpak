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

	var postNewContact = function(newContact) {
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


	var deleteContact = function(contactId) {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.success(function(deleteResponse) {
				resolve(deleteResponse);
			})
			.error(function(deleteError) {
				reject(deleteError);
			});
		});
	};

	var getSingleContact = function(contactId) {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.success(function(getSingleResponse) {
				resolve(getSingleResponse);
			})
			.error(function(getSingleError) {
				reject(getSingleError);
			});
		});
	};

	var	editContact = function(editContact) {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`,
				JSON.stringify ({
					name: editContact.name,
					phone: editContact.phone,
					email: editContact.email,
					url: editContact.url,
					social: editContact.social,
					address: editContact.address,
					citystate: editContact.citystate
				})
			)
			.success(function(editResponse) {
				resolve(editResponse);
			})
			.error(function(editError){
				reject(editError);
			});
		});
	};

	return {
		getContacts : getContacts,
		postNewContact : postNewContact,
		deleteContact: deleteContact,
		getSingleContact: getSingleContact,
		editContact: editContact
	};
});