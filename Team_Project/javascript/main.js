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

    console.log(currentDate);
    console.log(adults);
    console.log(children);
    console.log(number_of_nights);
    console.log(selected_room);
    console.log(currentDate);
    console.log(check_in_date);
    console.log(total_price);

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
    } else {
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