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

    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();

    console.log(month);
    console.log(day);
    console.log(year);

    month = (month<10) ? ("0" + month) : month;
    day = (day<10) ? ("0" + day) : day;
    

    var date = ("Today's date is " + month + "/" + day + "/" + year);


    document.getElementById('clockDisplay').innerText = time;

    document.getElementById('dateDisplay').innerText = date;

    setTimeout(showTime, 1000);

    // 1. Add a different font (of your choice) for your clock to use.
    // 2. Display the current date below the time. For example: Today's date is: Tuesday, September 17th. *Hint - hours, minutes, and seconds aren't the only thing we can pull from a date object*
    // 3. Add a header to your clock displaying your name, GitHub link, and LinkedIn profile link.

}

showTime();

