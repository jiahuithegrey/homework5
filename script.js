// User Flow
// -----------------------------------
// 1. Open app in a browser --> Create HTML document, JavaScript file, CSS file
// 2. See the date at the top of the page --> function
// 3. Schedule 1hr blocks (9 am - 5 pm) --> function (loop)
//     a. Time
//     b. Text area (type taskEl) --> unique ID for each row
//     c. Save hourEl (save button) --> event handler
// 4. If taskEl is in the past - Grey --> CSS styles --> function to
//    change style based on past, present, future
// 5. If taskEl is present - red
// 6. If taks is future - green
// ************************************************************************
// To Build:
// ----------
// 1. HTML Document:
//     a. Title
//     b. Table
//         1. Rows (each hourEl)
//             i. Time
//             ii. Text area
//             iii. Save button
//     c. add link to JS file
// 2. JavaScript
//     a. function to build scheduler Rows (function buildRows) --> loop, moment.js
//     b. Set date at top of page (function showTodaysDate) --> moment.js
//     c. Save button event handler (function saveRow) --> uses localstorage
//     d. Change row styles (function updateRowStyle) --> moment.js
//         i. on page load, check current time (hourEl) against rows in scheduler
//         ii. update style for those that are past hours, present hourEl, future hours
// ************************************************************************

// a. Set date at top of page (function showTodaysDate) --> moment.js
//function showTodaysDate() {
var now = moment().format ('dddd, MMMM Do');
$("#currentDay").text(now);

// b. function to build scheduler Rows (function buildRows) --> loop, moment.js
var timeSlots = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
function buildRows(){
  var tableEl = $("<table></table>");
  for (var i = 0; i < timeSlots.length; i++){
    var rowEl = $("<tr>");
    tableEl.append(rowEl);

    var hourEl = $("<td>");
    var taskEl = $("<td>");
    var saveCol = $("<td>");
    var saveBtn = $("<button>");
    saveCol.append(saveBtn);
    saveBtn.addClass("saveBtn");

    rowEl.addClass("row");
    rowEl.append(hourEl);
    rowEl.append(taskEl);
    rowEl.append(saveCol);

    hourEl.attr("data-letter", timeSlots[i]);
    hourEl.text(timeSlots[i]);
    hourEl.addClass("time-block");

    var userInput = $("<textarea>");
    taskEl.append(userInput);
  }
}
// c. Save button event handler (function saveRow) --> uses localstorage
var todo = localStorage.getItem("todo");
taskEl.text(todo);
function saveRow() {
  saveBtn.on("click", function() {
  taskEl.text(todo);
  localStorage.setItem("todo", todo);
  });
}
// d. Change row styles--> moment.js
function updateRowStyle() {
  // TODO - finish
  // i. on page load, check current time (hourEl) against rows in scheduler
  // ii. update style for those that are past hours, present hourEl, future hours
}
buildRows();
