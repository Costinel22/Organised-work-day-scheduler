var currentDate;
var text;
var time;
// first I will use jquery to set the date 
$(document).ready(function() {
    // I used "LL"format of " MMMM D, YYYY" English locale format
    currentDate = dayjs().format("dddd, MMMM D, YYYY");
    // now I will use the "id" of the html inside of the <p> element to pozitionize the date
    $("#currentDay").text(currentDate);
});

// here we create a funtion to save the text of the current hour from textare on HTML
$(document).ready(function() {
    // saveBtn click listener on parent element
    $(".time-block").on("click", ".saveBtn", function() {
        text = $(this).siblings(".fillHere").val();
        time = $(this).parent().attr("id");
        //save the text in localStorage 
        localStorage.setItem(time, text);
    });
});

var timeNow;
var blockTime
    // get the time and add past, present and future class to the block for collor
function updateTimeClasses(block, timeNow) {
    // block it will retrieve the value of the id atributes of html element representing variable block 
    blockTime = parseInt(block.attr("id").split("hour")[1]);
    // will use if statement to to update current color for actual time 
    if (blockTime < timeNow) {
        block.removeClass("future present").addClass("past");
    } else if (blockTime === timeNow) {
        block.removeClass("future past").addClass("present");
    } else {
        block.removeClass("present past").addClass("future");
    }
}
// here we atribuit the block class and remove it from the block class list of color what depends on the of moment.
$(document).ready(() => {
    function timeTracker() {
        timeNow = moment().hour();
        $(".time-block").each((i, block) => updateTimeClasses($(block), timeNow));
    }
    timeTracker();
    // crete a lop whenever you refresh the the screen, the time filled in will be updated
    for (let hour = 10; hour <= 17; hour++) {
        $("#hour" + hour + " .fillHere").val(localStorage.getItem("hour" + hour));
    }
});