function showTime() {
    var date = new Date(); 
    
    var hour = date.getHours();          // 0 - 23
    var minute = date.getMinutes();      // 0 - 59
    var second = date.getSeconds();      // 0 - 59
    var period = "A.M";

    console.log(hour); 
    console.log(minute);
    console.log(second);

    // We need to make sure the hour is properly represented in 12-hr time, and we also need to determine whether we should display A.M. or P.M.

    // With our hours being between 0 and 23, 0 would equal 12 A.M. and anything above 12 is a P.M. hour.

    if (hour === 0) {
        period = "A.M.";
    } else if (hour >= 12) {
        period = "P.M.";
    }


    if (hour === 0) {
        hour = 12; // If hour equals 0, change it to 12.
    }

    if (hour > 12) {
        hour = hour - 12; // If hour is greater than 12, subtract 12 from it - 13 === 1.
    }

    hour = (hour<10) ? ("0" + hour) : hour;

    minute = (minute<10) ? ("0" + minute) : minute;

    second = (second<10) ? ("0" + second) : second;

    var time = hour + ":" + minute + ":" + second + " " + period;

    console.log(time);

    document.getElementById('clockDisplay').innerText = time;

    setTimeout(showTime, 1000);
}

showTime();

