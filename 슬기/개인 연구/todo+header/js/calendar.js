const calendar = document.querySelector("#calendar");
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
calendar.innerText = today.toLocaleDateString('en-US', options);
