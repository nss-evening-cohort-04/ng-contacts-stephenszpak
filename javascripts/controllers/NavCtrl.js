"use strict";

app.controller("NavCtrl", function($scope){
	$scope.navItems = [
		{
			name:"Logout",
			url:"#logout"
		},
		{
			name:"All Items",
			url:"#/contacts/list"
		},
		{
			name:"New Item",
			url:"#/contacts/new"
		}
	];
});