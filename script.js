//Code to display the current date in the header of the page.//
let now = dayjs().format('dddd, MMMM D, YYYY')
let displayTime = document.getElementById('currentDay');
displayTime.innerHTML = now;
let currentHour = dayjs().format('HH')


// Get all elements with the "time-div" class
var timeDivs = document.querySelectorAll(".time-div");

// Loop over each element
timeDivs.forEach(function(timeDiv) {
  // Extract the time value from the element's ID
  var time = timeDiv.id.split("-")[1];

  // Check whether the current time is before, after, or equal to the element's time
  if (currentHour == time) {
      // If it's equal, add the "present" class
      timeDiv.classList.add("present");
      timeDiv.querySelector(".description").classList.add("present");
  } else if (currentHour < time) {
      // If it's before, add the "future" class and remove the "present" class
      timeDiv.classList.add("future");
      timeDiv.classList.remove("present");
  } else {
      // If it's after, add the "past" class and remove the "present" class
      timeDiv.classList.add("past");
      timeDiv.classList.remove("present");
  }
});
//saves value in time-block in local storage.
function saveValue(event) {
  event.preventDefault();
  const value = $(event.target).siblings(".time-block").val();
  const time = $(event.target).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
}

$(".saveBtn").click(saveValue);
//Retrieve data from local storage 
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));


//Clear Button 
const clearFields = (event) => {
event.preventDefault();
$("textArea").val("");
localStorage.clear();
};

$("#clearFieldsBtn").click(clearFields);