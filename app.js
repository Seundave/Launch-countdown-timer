const countdown = () =>{
    const countDate = new Date('July 16,2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor (gap / day);
    const textHour = Math.floor (gap % day / hour);
    const textMinute = Math.floor (gap % hour / minute);
    const textSecond = Math.floor (gap % minute / second);

    document.querySelector(".days-card").innerText = textDay;
    document.querySelector(".hours-card").innerText = textHour;
    document.querySelector(".minute-card").innerText = textMinute;
    document.querySelector(".second-card").innerText = textSecond;

    if(gap < 1000){
        document.querySelector(".days-card").innerText = 0;
        document.querySelector(".hours-card").innerText = 0;
        document.querySelector(".minute-card").innerText = 0;
        document.querySelector(".second-card").innerText = 0;
    }

    
};


setInterval(countdown, 1000);

