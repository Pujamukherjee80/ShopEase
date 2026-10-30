
/* =================================
   SHOPEASE LOGIN & REGISTER SYSTEM
================================= */

// Local Storage Key
const ACCOUNTS_KEY = "shopease_accounts";

// HTML Elements
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");

const authMessage = document.getElementById("authMessage");


// =================================
// GET REGISTERED ACCOUNTS
// =================================

function getAccounts() {

    try {

        return JSON.parse(
            localStorage.getItem(ACCOUNTS_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


// =================================
// SHOW LOGIN OR REGISTER FORM
// =================================

function switchForm(type) {

    authMessage.textContent = "";
    authMessage.className = "message";

    if (type === "login") {

        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

        loginTab.classList.add("active");
        registerTab.classList.remove("active");

        formTitle.textContent = "Welcome Back!";
        formSubtitle.textContent =
            "Login to continue shopping.";

    } else {

        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");

        loginTab.classList.remove("active");
        registerTab.classList.add("active");

        formTitle.textContent = "Create Account";
        formSubtitle.textContent =
            "Join ShopEase and start shopping.";

    }

}


// =================================
// TAB BUTTON EVENTS
// =================================

loginTab.addEventListener("click", function () {

    switchForm("login");

});

registerTab.addEventListener("click", function () {

    switchForm("register");

});


// =================================
// SHOW MESSAGE
// =================================

function showMessage(message, type = "error") {

    authMessage.textContent = message;

    authMessage.className =
        type === "success"
            ? "message success"
            : "message";

}


// =================================
// CREATE ACCOUNT
// =================================

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get input values

    const name = document
        .getElementById("registerName")
        .value.trim();

    const email = document
        .getElementById("registerEmail")
        .value.trim()
        .toLowerCase();

    const password = document
        .getElementById("registerPassword")
        .value;

    const confirmPassword = document
        .getElementById("confirmPassword")
        .value;


    // Validate password length

    if (password.length < 6) {

        showMessage(
            "Password must contain at least 6 characters."
        );

        return;

    }


    // Check password matching

    if (password !== confirmPassword) {

        showMessage(
            "Password and Confirm Password do not match."
        );

        return;

    }


    // Get existing accounts

    const accounts = getAccounts();


    // Check duplicate email

    const existingAccount = accounts.find(function (account) {

        return account.email === email;

    });

    if (existingAccount) {

        showMessage(
            "This email is already registered. Please login."
        );

        return;

    }


    // Create new account

    const newAccount = {

        name: name,
        email: email,
        password: password

    };


    // Save account

    accounts.push(newAccount);

    localStorage.setItem(
        ACCOUNTS_KEY,
        JSON.stringify(accounts)
    );


    // Save current user

    localStorage.setItem(
        "shopease_user",
        JSON.stringify({
            name: name,
            email: email
        })
    );


    // Start login session

    sessionStorage.setItem(
        "shopease_logged_in",
        "true"
    );


    showMessage(
        "Account created successfully!",
        "success"
    );


    // Redirect to homepage

    setTimeout(function () {

        window.location.href = "index.html";

    }, 700);

});


// =================================
// LOGIN
// =================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get input values

    const email = document
        .getElementById("loginEmail")
        .value.trim()
        .toLowerCase();

    const password = document
        .getElementById("loginPassword")
        .value;


    // Get registered accounts

    const accounts = getAccounts();


    // Find matching account

    const account = accounts.find(function (item) {

        return (
            item.email === email &&
            item.password === password
        );

    });


    // Check account

    if (!account) {

        showMessage(
            "Incorrect email or password. Please try again."
        );

        return;

    }


    // Save logged-in user

    localStorage.setItem(
        "shopease_user",
        JSON.stringify({
            name: account.name,
            email: account.email
        })
    );


    // Start session

    sessionStorage.setItem(
        "shopease_logged_in",
        "true"
    );


    showMessage(
        "Login successful!",
        "success"
    );


    // Redirect to homepage

    setTimeout(function () {

        window.location.href = "index.html";

    }, 700);

});
