// Find out my akan name button
function showText() {
    alert("Great start! now click OK and scroll down to fill the form")
}
// arrays.
let mAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let fAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// get date from user
function button1() {
    var date = document.getElementById('DOB').value;

    var CC = date.substring(0, 2);
    var YY = date.substring(0, 4);
    console.log(YY)
    var MM = date.substring(5, 7);
    var DD = date.substring(8, 10);

    CC = parseInt(CC);
    YY = parseInt(YY);
    MM = parseInt(MM);
    DD = parseInt(DD);

    // math.floor(trancates) formula
    var calculate = (DD + parseInt(((MM + 1) * 26) / 10) + YY + parseInt(YY / 4) + 6 * parseInt(YY / 100) + parseInt(YY / 400) - 1) % 7;

    myGender(calculate, date)
}

// Gender
function myGender(day, date) {
    let gender = document.getElementById('gender').value;
    let akanName
    let wday
    if (date == "") {
        alert("please chose a date")
    } else if (gender == "null") {
        alert("please chose a gender")
    } else if (gender == 'male') {
        akanName = mAkanName[day]
        wday = daysOfTheWeek[day]
        alert("WOW! You were born on a " + wday + " and your AKAN name is: " + akanName)
    } else if (gender == 'female') {
        akanName = fAkanName[day]
        wday = daysOfTheWeek[day]
        alert("WOW!You were born on a " + wday + " and your AKAN name is: " + akanName)
    }
}