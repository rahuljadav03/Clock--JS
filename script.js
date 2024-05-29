const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);

// setInterval is one type of function is using to change the second to second of your code/time etc...
// toLocaleTimeString is function that only see the time...