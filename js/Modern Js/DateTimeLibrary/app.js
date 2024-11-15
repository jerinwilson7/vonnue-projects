 const now = new Date();

//  console.log(dateFns.isToday(now));
  

// formatting options


console.log(dateFns.format(now,'dddd,Do,MMMM,YYYY'));
console.log(dateFns.format(now,'MMM'));

//compareing dates

const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now,before ,{addSuffix:true}));
