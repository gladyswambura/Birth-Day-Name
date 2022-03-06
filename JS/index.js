// Find out my akan name button
function showText() {
    alert("Great start! now click OK and -scroll down to fill the form")
}
// arrays.
let mAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let fAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// get date from user
function button1() {
    var date = document.getElementById('DOB').value;

    // (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) mod 7

    // CC - is the century digits.For example 1989 has CC = 19
    // YY - is the Year digits(1989 has YY = 89)
    // MM - is the Month
    // DD - is the Day of the month
    // mod - is the modulus
    // function ( % )

     // example user inputs 2022-12-31
     var CC = date.substring(0, 2);
     var YY = date.substring(2, 4);
     var MM = date.substring(5, 7);
     var DD = date.substring(8, 10);

     CC = parseInt(CC);
     YY = parseInt(YY);
     MM = parseInt(MM);
     DD = parseInt(DD);

      // math.floor(trancates) formula
      var calculate = (Math.floor(CC / 4) - 2 * CC - 1 + 5 * Math.floor(YY / 4) + Math.floor((26 * (MM + 1)) / 10) + DD) % 7
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
              alert("You were born on a: " + wday + " and your AKAN name is: " + akanName)
          } else if (gender == 'female') {
              akanName = fAkanName[day]
              wday = daysOfTheWeek[day]
              alert("You were born on a: " + wday + " and your AKAN name is: " + akanName)
          }
      }
