const day = require('./day.js');

let i = day.length - 1;
const goodDay = function() {
    const token = setInterval(function() {
        console.clear();
        console.log(day[i]);
        i--;
        if(i == 0) {
            clearInterval(token);    
        }
    }, 1000);
}

goodDay();
