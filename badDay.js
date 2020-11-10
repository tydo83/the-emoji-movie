const day = require('./day.js');

let i = 0;
const badDay = function() {
    const token = setInterval(function() {
        console.clear();
        console.log(day[i]);
        i++;
        if(i == day.length) {
            clearInterval(token);    
        }
    }, 1000);
}

badDay();

