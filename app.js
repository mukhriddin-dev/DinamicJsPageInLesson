const root = document.querySelector('#root');

let container = document.createElement('div');

let card = document.createElement('div');
let card2 = document.createElement('div');
let card3 = document.createElement('div');

let img = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');

let p = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');

img.src = "./rasm1.jpg";
img2.src = "./rasm2.jpg";
img3.src = "./rasm3.jpg";

p.innerHTML = 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit';
p2.innerHTML = 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit';
p3.innerHTML = 'Lorem Ipsum dolar sit amet, consectetur adipiscing elit';


container.classList.add('container');

card.style.cssText = "background:white; width: 360px ; height:420px; margin:25px 36px; display: inline-block ";
card2.style.cssText = "background:white; width: 360px ; height:420px; margin:25px 36px; display: inline-block ";
card3.style.cssText = "background:white; width: 360px ; height:420px; margin:25px 36px; display: inline-block ";

img.style.cssText = "width:360px; height:260px";
img2.style.cssText = "width:360px; height:260px";
img3.style.cssText = "width:360px; height:260px";

img.classList.add('cover');
img2.classList.add('cover');
img3.classList.add('cover');

p.style.cssText = "margin: 12px 4px";


root.append(container);

container.append(card);
container.append(card2);
container.append(card3);

card.append(img);
card2.append(img2);
card3.append(img3);

card.append(p);
card2.append(p2);
card3.append(p3);
