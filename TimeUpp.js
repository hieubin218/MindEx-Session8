// Notes:
/* Disabled Property --> selectObject.disabled = true|false
    a. true: the drop-down list is disabled (frozen)
    b. false: Default. the drop-down list is not disabled. */


const UserInput = document.getElementById("inputTime");
const ButtonStart = document.getElementById("Start");
const ButtonStop = document.getElementById("Stop");
const result = document.getElementById("Result");


let interval;
function CountDown() {

    // Assign a Numbers Input of the User to variable named "value";
    let value = Number(result.innerText);
    // console.log(value);

    // Value deduction by 1
    value -= 1;

    // display the Value after deducted by 1 into the Screen
    result.innerText = value;

    // If value display is -1 --> show the Text by result.
    if (value == -1) {
        result.innerText = "Time's Up! Reng Reng!"

        // Stop the time running and back to begin
        clearInterval(interval);
        
    }
}

function onStart() {
    // button is frozen for True value
    ButtonStart.disabled = true;
    // button is not frozen for False value
    ButtonStop.disabled = false;
    let value = UserInput.value;
    result.innerText = value;

    // setInterval(function, miliseconds) 
    interval = setInterval(CountDown, 1000)

}

const onStop = () => {
    ButtonStart.disabled = false;
    ButtonStop.disabled = true;
    clearInterval(interval);

}

// ButtonStart.addEventListener("click", onStart);
ButtonStop.addEventListener("click", onStop);

