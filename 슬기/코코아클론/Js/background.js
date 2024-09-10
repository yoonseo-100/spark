const images = ["배경화면1.jpeg","배경화면2.jpeg","배경화면3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);