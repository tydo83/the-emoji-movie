const day = require('./day.js');

let i = 0;
const slowDay = function() {
    const token = setInterval(function() {
        console.clear();
        console.log(day[i]);
        i++;
        if(i == day.length) {
            clearInterval(token);    
        }
    }, 3000);
}

slowDay();