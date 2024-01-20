// first I will use jquery to set the date 
$(document).ready(function() {
    // I used "LL"format instead of " MMMM D, YYYY" English locale format
    var currentDate = dayjs().format(LL);
    // now I will use the "id" of the html inside of the <p> element to pozitionize the date
    $("#currentDay").text(currentDate);
});