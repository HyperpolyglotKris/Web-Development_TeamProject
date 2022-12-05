//function for reservation page
function ReservationFormStore() {
    var firstN = document.getElementById('first_name').value;
    var lastN = document.getElementById('last_name').value;
    var emailA = document.getElementById('email').value;
    var adultsN =document.getElementById('adults').value;
    var childrenN =document.getElementById("children").value;
    var arrivalD = document.getElementById("arrival_date").value;
    var departureD =document.getElementById("departure_date").value;
    var totalPrice = document.getElementById("total_price").value;
    var key = firstN + " " + lastN; //gets the key from the user

    const order = {
        FirstName: firstN,
        LastName: lastN,
        EmailAddress:emailA,
        Adult:adultsN,
        Children:childrenN,
        ArrivalDate:arrivalD,
        DepartureDate:departureD,
        TotalPrice:totalPrice,
    }

    window.localStorage.setItem(key, JSON.stringify(order));
    var records = window.localStorage.getItem(key);
    alert("Your room has been booked successfully! This is your order details:\n" + 
        "\nFirstName: " + firstN + 
        "\nLastName: " + lastN + 
        "\nEmailAddress: " + emailA +
       "\nAdult: " + adultsN +
        "\nChildren: " + childrenN +
        "\nArrivalDate: " + arrivalD +
        "\nDepartureDate: "+ departureD +
        "\nTotalPrice: " + totalPrice);
}

function calculateTotalPrice(){
   
    var arrivalD = document.getElementById("arrival_date").value;
    var departureD =document.getElementById("departure_date").value;
    var unitPrice = document.getElementById("unit_price").value;

    if(arrivalD != 0){
        var arrD = new Date(arrivalD);
        var depD = new Date(departureD);
        numOfNights = (depD - arrD)/(1000*3600*24);
    }

    document.getElementById("total_price").value = unitPrice* numOfNights;
}

function setUnitPrice(roomOption){
    var roomUnitPrice = roomOption.value;
    document.getElementById("unit_price").value = roomUnitPrice;
}

//function for attraction page

let slideIndex = 0;
showSlides();
showSlides2();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides2, 4000); // Change image every 4 seconds
}


// functuon for sign up page
function valideSignUpForm() {
    let x = document.getElementById("password-signup").value;
    let y = document.getElementById("rePassword-signup").value;
    let z = document.getElementById("email-signup").value;
    let record = window.localStorage.getItem(JSON.stringify(z));
    let length = x.length;
    if (length < 6) {
        alert("Sorry, your password should have at least 6 charactors");
        return false;
    } else {

        if (x != y) {
            alert("Sorry, your password doesn't match!");
            return false;
        }
        else {
            if (record == null) {
                window.localStorage.setItem(JSON.stringify(z), x);
                alert("You have signed up successfully, please sign in now");
                return true;
            } else {
                alert("You aleady have an existing account with this email, please sign in directly");
                return true;
            }
        }
    }
}

//function for sign in page
function valideSignInForm() {
    let email = document.getElementById("email-signin").value;
    let password = document.getElementById("password-signin").value;
    let record = window.localStorage.getItem(JSON.stringify(email));
    if (record == null) {
        alert("Sorry, you havn's signed up yet, please sign up with your email address");
        document.getElementById("sign-in").action = "sign_up.html";
        return true;
    } else {
        if (record != password) {
            alert("Sorry, your password is incorrect, please reenter a correct password.");
            return false;
        } else {
            alert("Welcome to Cuite Bunny Bay!");
            return true;
        }
    }
}

//functions to retrive, remove or clear in sign in page
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

