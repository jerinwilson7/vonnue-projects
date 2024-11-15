// date and time


const now = new Date();
// console.log(now); 

// console.log('getFullYear: ',now.getFullYear());
// console.log('getMonth:',now.getMonth());
// console.log('getDate:',now.getDate());
// console.log('getDate:',now.getDate());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());





const before = new Date('may 25 2023 7:30:59');

const diff = now.getTime() - before.getTime();

console.log(diff);


const minutes = Math.round(diff / 1000 / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours/24)

console.log("minutes :",minutes);
console.log('hours: ',hours);
console.log('days :',days);

console.log(`the blog was written ${days} ago`);

const timeStamp = 999800044990;
    
const subin = new Date('7 october 2003 5:50:59')

const myDate = new Date(timeStamp)

const diffDay = now -subin
const myMinutes = Math.round(diffDay / 1000 / 60)
const myHours = Math.round(myMinutes / 60)
const MyDays = Math.round(myHours / 24)

console.log(`${MyDays} days ${myHours} hours ${myMinutes} minutes`);




