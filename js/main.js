const sc = document.querySelector('.hand-sc');
const mn = document.querySelector('.hand-mn');
const hr = document.querySelector('.hand-hr');

function setDate() {
    let time = new Date();

    let second = time.getSeconds();
    let secondDegrees = ((second / 60) * 360) + 90;
    sc.style.transform = `rotate(${secondDegrees}deg)`;

    let minut = time.getMinutes();
    let minutDegrees = ((minut / 60) * 360) + 90;
    mn.style.transform = `rotate(${minutDegrees}deg)`;

    let hour = time.getHours();
    let hourDegrees = ((hour / 12) * 360) + 90;
    hr.style.transform = `rotate(${hourDegrees}deg)`
};

setInterval(setDate, 1000);