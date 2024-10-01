const calendar = document.querySelector<HTMLElement>("#calendar");
const today: Date = new Date();
const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

// calendar가 null이 아님을 단언
if (calendar) {
    calendar.innerText = today.toLocaleDateString('en-US', options);
}
