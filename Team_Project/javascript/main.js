
// Function for Validating Reservation Form
function validateReservation() {
    let first_name = document.forms["hotel_reservation"]["first_name"].value;
    let last_name = document.forms["hotel_reservation"]["last_name"].value;
    let email_address = document.forms["hotel_reservation"]["email"].value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let number_of_nights = document.getElementById("number_of_nights").value;
    let check_in_date = document.getElementById("check_in_date").value;
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    let selected_room = radios.length > 0 ? radios[0].value : null;
    let total_price = document.getElementById('price').textContent;
    // Get today's date
    let currentDate = new Date().toJSON().slice(0, 10);

    if (first_name == "") {
        alert("Please enter your first name!");
        return false;
    } else if (last_name == "") {
        alert("Please enter your last name!");
        return false;
    } else if (email_address == "") {
        alert("Please enter your email address!");
        return false;
    } else if (adults == "" || adults == 0) {
        alert("Minimum of one adult per room is required!");
        return false;
    } else if (number_of_nights == 0) {
        alert("Minimum of one night is required!");
        return false;
    } else if (check_in_date == "") {
        alert("Please enter a check-in date!");
        return false;
    } else if (check_in_date < currentDate) {
        alert("Please enter current or upcoming date!");
        return false;
    } else if (selected_room == null) {
        alert("Please select a room type!");
        return false;
    }

    else {
        var room_type = "";
        if (selected_room == 0) {
            room_type = "Room With a Pool";
        } else if (selected_room == 1) {
            room_type = "Suite";
        } else if (selected_room == 2) {
            room_type = "Two Beds Room"
        }
        var text = "- Reservation Sent -\n\nName: " + first_name + " " + last_name + "\nEmail: " + email_address + "\nRoom: " + room_type + "\nNumber of Nights: " + number_of_nights + "\nCheck-In Date: " + check_in_date + "\n\nTotal Price: " + total_price;
        alert(text)
        return true;
    }
}

// Function for Displaying the Total Price of Reservation
function displayTotalPrice() {
    var price = 0.00;
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    let selected_room = radios.length > 0 ? radios[0].value : null;
    let number_of_nights = document.getElementById("number_of_nights").value;
    if (selected_room == 0) {
        price = 466.99;
    } else if (selected_room == 1) {
        price = 422.88;
    } else if (selected_room == 2) {
        price = 388.98;
    }
    var totalPrice = price * number_of_nights;
    totalPrice = totalPrice.toFixed(2);
    var totalPriceString = "$ " + totalPrice;
    document.getElementById('price').innerText = totalPriceString;
}

// Function for Validating Sign-Up Form
function validateSignUp() {
    let emailSignUp = document.getElementById("email-signup").value;
    let passwordSignUp = document.getElementById("password-signup").value;
    let rePasswordSignUp = document.getElementById("rePassword-signup").value;

    if (emailSignUp == "") {
        alert("Please enter an email address!");
        return false;
    } else if (passwordSignUp == "") {
        alert("Please enter a password!");
        return false;
    } else if (rePasswordSignUp == "") {
        alert("Please re-enter your password!");
        return false;
    } else if (passwordSignUp.length < 6) {
        alert("Password should be at least 6 charactors long!");
        return false;
    } else if (passwordSignUp != rePasswordSignUp) {
        alert("Passwords do not match!");
        return false;
    }

    let record = window.localStorage.getItem(JSON.stringify(emailSignUp));

    if (record == null) {
        window.localStorage.setItem(JSON.stringify(emailSignUp), passwordSignUp);
        alert("You have signed up successfully. Please sign in now.");
        return true;
    } else {
        alert("Email belongs to existing account. Sign-In Instead.");
        return true;
    }
}

// Function for Validating Sign-In Form
function validateSignIn() {
    let email = document.getElementById("email-signin").value;
    let password = document.getElementById("password-signin").value;
    let record = window.localStorage.getItem(JSON.stringify(email));

    if (email == "") {
        alert("Please enter your email address!");
        return false;
    } else if (password == "") {
        alert("Please enter your password!");
        return false;
    } else if (password != record) {
        alert("Incorrect password. Try-Again.");
        return false;
    } else {
        alert("Welcome Back to Cuite Bunny Bay!");
        return true;
    }
}

// Function for Attractions Page Slideshow
let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides();
showSlides2();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    setTimeout(showSlides2, 6000); // Change image every 6 seconds
}

// Functions to Retrive, Remove or Clear -> Sign-In page
function retrieveRecords() {
    var key = document.getElementsById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementsById("retrieve");
    element.appendChild(paragraph);
}

function removeItem() {
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(JSON.stringify(key))
    console.log("remove items");
}

function clearStorage() {
    localStorage.clear()
    console.log("clear records");
}

window.onload = function () {
    document.getElementsById("retrieveButton").onclick = retrieveRecords;
    document.getElementById("clearButton").onclick = clearStorage;
    document.getElementById("removeButton").onclick = removeItem;
}