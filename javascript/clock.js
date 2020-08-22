const clockContainr = document.querySelector(".js-clock"),
    clockTitle = clockContainr.querySelector("h1");

function getTime() {
    const date = new Date();
    const minstes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `2${hours}` : hours}:${
        minstes < 10 ? `0${minstes}` : minstes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}
// setInterval( , ) 첫번째 인자는 함수, 두번째 인자는 실행할 시간 간격

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();