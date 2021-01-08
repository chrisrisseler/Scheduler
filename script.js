//get the currentDay id
var date = document.getElementById("currentDay")
//get date called in format of month day year
var momentTime = moment().format('MMMM Do YYYY');
//change text in currentDay to date and time
date.textContent = momentTime

function checkTime() {

  var currentHour = moment().hour()

  // var currentHour = 12

  $("textarea").each(function () {
    var calendarHour = parseInt($(this).attr("id"))

    if (calendarHour < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past")
    }
    else if (currentHour === calendarHour) {
      $(this).removeClass("past")
      $(this).removeClass("future");
      $(this).addClass("present")
    }
    else {
      $(this).removeClass("past")
      $(this).removeClass("present");
      $(this).addClass("future")
    }
  })

  // console.log("this is running")
}

checkTime()

var updateTime = setInterval(checkTime, 15000)

//get text areas

//get time

// console.log(hour)

//have text area change color based on if time has passed

//get button click
$(".btn").click(function (event) {
  event.preventDefault();
  var time = $(this).siblings("textarea").attr("id")

  var text = $(this).siblings("textarea").val()

  localStorage.setItem(time, text)
  console.log(text)
})
//have button click save text area to local memory

//have prevent default in text area to keep it from defaulting

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))
