"use strict";
const textpop = document.querySelector(`.text`);
const btn = document.getElementById(`btns`);

// Signup
function signup(e) {
  event.preventDefault();
  let email = document.getElementById(`email`).value;
  let username = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;

  let emailValid = document.getElementById(`email`);
  let userValid = document.getElementById(`username`);
  let passwordValid = document.getElementById(`password`);
  let emailValidValue = emailValid.value.trim();
  let userValidValue = userValid.value.trim();
  let passwordValidValue = passwordValid.value.trim();

  const user = {
    email: email,
    username: username,
    password: password,
  };
  const json = JSON.stringify(user);
  localStorage.setItem(username, json);
  if (
    emailValidValue === "" ||
    userValidValue === "" ||
    passwordValidValue === ""
  ) {
    alert("Please enter a value");
  } else {
    // Redirect to another HTML file
    window.location.href = "login.html";
  }

  document.getElementById(`email`).value = ``;
  document.getElementById(`username`).value = ``;
  document.getElementById(`password`).value = ``;
}

// Login
function login(e) {
  event.preventDefault();
  let username = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;

  const user = localStorage.getItem(username);
  const data = JSON.parse(user);
  const nameLogin = document.querySelector(`.nameLogin`);
  if (!user || !password) {
    alert("Please fill out the form");
  } else if (user === null) {
    alert(`Wrong Username`);
  } else if (username === data.username && password === data.password) {
    window.location.href = "inside.html";
  } else {
    alert(`Wrong Password`);
  }
  const userReset = document.getElementById(`username`);
  const passwordReset = document.getElementById(`password`);

  userReset.value = "";
  passwordReset.value = "";
}
