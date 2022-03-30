// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's hours worked and hourly pay, then calculates their total pay including tax.

  // get hours from text field
  let hours = document.getElementById("hours").value
	// get hourly pay from text field and cast it to integer
  let payEntered = parseInt(document.getElementById("pay-entered").value)
  // display pay and tax back to user
  document.getElementById('user-info').innerHTML = "Your pay will be " + hours + " and the government is taking " + payEntered + " ."
}