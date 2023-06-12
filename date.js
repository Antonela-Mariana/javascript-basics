var date = new Date();
console.log('date: ', date.toString());

var date1 = new Date(2023, 6, 13);
console.log('date1: ', date1.toDateString());

var date2 = new Date('2023-06-13');
console.log('date2: ', date2.toDateString());

var date3 = new Date(1686603600000);
console.log('date3: ' + date3);
