const images = ["01_배경화면.jpeg","02_배경화면.jpeg","03_배경화면.jpeg","04_배경화면.jpeg",
    "05_배경화면.jpeg","06_배경화면.jpeg","07_배경화면.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);