// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("hours").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("pay-entered").value)
  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your pay will be " + firstName + " and the government is taking " + userAge + " ."
}