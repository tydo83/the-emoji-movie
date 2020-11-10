const day = require('./day.js');

let i = 0;

const timeMaster = function() {
    const timeInput = process.argv[2];
    const token = setInterval(function() {
        console.clear();
        console.log(day[i]);
        i++;
        if(i == day.length) {
            clearInterval(token);    
        }
    }, timeInput * 1000);
}

timeMaster();

