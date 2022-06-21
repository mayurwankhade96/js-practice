// A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years. Ask user for their salary and year of service and print the net bonus amount.

function getNetBonus(salary, yearOfService) {
  let bonus = 0;
  if (yearOfService > 5) {
    bonus = (salary * 5) / 100;
    console.log(`Your bonus amount is ${bonus}`);
  } else {
    console.log("You are not eligible for bonus");
  }
}

getNetBonus(15000, 6);
getNetBonus(27000, -6);
getNetBonus(27000, 6);

// Take values of length and breadth of a rectangle from user and check if it is square or not.

function isSquare(length, breadth) {
  if (length === breadth) {
    console.log("It is square");
  } else {
    console.log("It is not square");
  }
}

isSquare(5, 5);
isSquare(5, 6);

// A student will not be allowed to sit in exam if his/her attendence is less than 75%.
// Take following input from user
// Number of classes held
// Number of classes attended.
// And print
// percentage of class attended
// Is student is allowed to sit in exam or not.

function isAllowed(totalNumOfClasses, numOfClassAttended) {
  if ((numOfClassAttended * 100) / totalNumOfClasses < 75) {
    console.log("Student is not allowed to sit in exam");
  } else {
    console.log("Student is allowed to sit in exam");
  }
}

isAllowed(10, 8);
isAllowed(190, 140);
