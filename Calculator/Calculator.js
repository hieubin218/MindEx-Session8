let ScreenDisplay = document.querySelector('.inputFromButton');
let AllButton = Array.from(document.getElementsByClassName('item'));


AllButton.forEach(function(buttonClicked) {
    buttonClicked.addEventListener('click', function() {

        let value = buttonClicked.innerHTML;

        if (ScreenDisplay.innerHTML == '0')
        ScreenDisplay.innerHTML = '';

        if (value == 'AC')
        ScreenDisplay.innerHTML = '0';

        else if (value == 'DEL') {

            var TextLength = Array.from(ScreenDisplay.innerHTML);
            TextLength.splice(TextLength.length-1, 1);

            if (TextLength.length != '0')
            ScreenDisplay.innerHTML = TextLength.join('');

            else ScreenDisplay.innerHTML = '0';
                
        }

        else if (value == '=') {
            ScreenDisplay.innerHTML = eval(ScreenDisplay.innerHTML);
        }

        else ScreenDisplay.innerHTML += value;
    })
})

/* AllButton.addEventListener("click", display) */




