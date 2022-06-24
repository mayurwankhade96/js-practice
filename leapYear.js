function isLeapYear(year) {
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2012);
isLeapYear(2000);
isLeapYear(2100);
isLeapYear(1900);
isLeapYear(2016);
