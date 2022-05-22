const randomImg = document.querySelector("#random-img");

const img = ["1.jpg", "2.png", "3.png"];

const ramdom = Math.floor(Math.random() * img.length);

randomImg.src = `img/${img[ramdom]}`;
