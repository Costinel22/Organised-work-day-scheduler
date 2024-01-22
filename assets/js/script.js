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