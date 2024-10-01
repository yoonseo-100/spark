const clock = document.querySelector<HTMLElement>("h2#clock");

function getClock(): void {
    const date: Date = new Date();
    const hours: string = String(date.getHours()).padStart(2, "0");
    const minutes: string = String(date.getMinutes()).padStart(2, "0");
    const seconds: string = String(date.getSeconds()).padStart(2, "0");

    // clock이 null이 아님을 확인하고 설정
    if (clock) {
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    } else {
        console.error("clock element not found");
    }
}

getClock();
setInterval(getClock, 1000);

