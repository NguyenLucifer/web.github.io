const countdown = () => {
    const countDate = new Date("June 1, 2023 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);

    document.querySelector(".day").innerText = textDay;

};

countdown();