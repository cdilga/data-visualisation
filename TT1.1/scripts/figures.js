/*
author: Chris Dilger
created on: 27/02/2018
description: Part 2 of assignment JavaScript content
*/
"use strict";

function btn2011(e) {
  console.log("btn2011");
  var el = document.getElementById("2011");
  el.style.display = "block";
  var el = document.getElementById("2017");
  el.style.display = "none";
}

function btn2017(e) {
  console.log("btn2017");
  var el = document.getElementById("2017");
  el.style.display = "block";
  var el = document.getElementById("2011");
  el.style.display = "none";
}

function init() {
  var btnfig1 = document.getElementById("btn-2011");
  btnfig1.onclick = btn2011;
  var btnfig2 = document.getElementById("btn-2017");
  btnfig2.onclick = btn2017;
  console.log("Logged");
}

window.onload = init;
