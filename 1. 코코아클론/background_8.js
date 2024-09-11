const images = ["1.gif","2.gif","3.gif"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bdimage = document.createElement("img");
bdimage.src=`img/${chosenImage}`;
console.log(bdimage);
document.body.appendChild(bdimage);