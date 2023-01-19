
var dateDisplayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var blockTime = $(".time-block");

function displayTime() {
  var presentDay = new Date();

  dateDisplayEl.text(presentDay.toString());
}

// Added a event listener on the save botton.
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings("textarea").val();
    var date = $(this).parent().attr("id");

    localStorage.setItem(date, text);
  });

  function timeTracker() {
    var rightNow = new Date().getHours();
    console.log(rightNow);
    $(".time-block").each(function () {
      var hourId = $(this).attr("id");
      blockTime = parseInt(hourId.replace("hour-", ""));
      console.log(blockTime);

      if (blockTime > rightNow) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (blockTime === rightNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      // get item from local storage for this time block!
      // find the child text area and assign the value from local storage.
      var textItem = localStorage.getItem(hourId) || "";
      $(this).find("textarea").val(textItem);
    });
  }
  displayTime();
  timeTracker();
});
