function dayNumber(numOfDays) {
    if (numOfDays === 0 || numOfDays === 6) {
        console.log("it is the weekend");
    } else if (numOfDays > 0 && numOfDays < 6) {
        console.log("it is a weekday");
    } else {
        console.log("invalid day number");
    }
}

dayNumber(0);
dayNumber(1);
dayNumber(7);