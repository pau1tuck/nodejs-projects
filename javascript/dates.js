let date = new Date(); // e.g. 2023-07-13T12:30:00.000Z

let yy = date.getFullYear();

let mm = String(date.getMonth() + 1).padStart(2, "0"); // add 1

let dd = String(date.getDate()).padStart(2, "0");

let day = date.getDay();

date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();

date.setFullYear(1984);
date.setMonth(0);
date.setDate(7);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

date.toString(); // "Fri Jul 30 2023 14:12:52 GMT+0200 (CET)"
date.toUTCString(); // "Fri, 30 Jul 2023 12:12:52 GMT"
date.toISOString(); // "2023-07-30T12:12:52.011Z"
date.toDateString(); // "Fri Jul 30 2023"
date.toTimeString(); // "14:12:52 GMT+0200 (CET)"
date.toLocaleDateString(); // "7/30/2023" for "en-US" locale
date.toLocaleTimeString(); // "2:12:52 PM" for "en-US" locale
date.toLocaleString(); // "7/30/2023, 2:12:52 PM" for "en-US" locale
date.getTime(); // e.g. 1696213572011 milliseconds since Jan-1-1970
