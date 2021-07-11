const button = document.querySelector("button");
const BodyBackground = document.querySelector("body");
const colorList = ['red', 'darkblue', 'blue', 'black','yellow', 'blue','green','pink'];

/* Background Default */
BodyBackground.style.backgroundColor = 'wheat';

button.addEventListener('click', RandomColor);


function RandomColor() {
    // colorLength = colorList.length;
    // const item = parseInt(Math.random() * colorLength);
    // BodyBackground.style.backgroundColor = colorList[item];

    for (let item of colorList) {
        let colorLength = colorList.length;
        item = Math.floor(Math.random() * colorLength) + 1;
        BodyBackground.style.backgroundColor = colorList[item];
    }
}