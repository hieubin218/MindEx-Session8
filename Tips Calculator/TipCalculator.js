// READ DOM JS OF INPUT FROM USERS
let UserBill = document.getElementById("BillInput");
let SerViceQuality = document.getElementById("TipOption");

let Tip = document.getElementById("moneyTip");

let UserShare = document.getElementById("NumPeople");

let Button = document.getElementById("btnCalculate");


// FUNCTION CALCULATE TIP
function CalculationTIP() {
    let Bill = UserBill.value;
    let NumShare = UserShare.value;
    let Service = SerViceQuality.value;

    if (Bill === "" && Service == 0) {
        alert("Please Enter Your Bill!");
    } if (Service == 0) {
        
    }


    if (NumShare === "" || NumShare <= 1) {
        NumShare = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Formula Calculate Tip
    let CalculateBill = (Bill * Service) / NumShare;

    // Rounded the Money to 2 decimal places
    CalculateBill = CalculateBill.toFixed(2);

    // Display Tip
    Tip.innerHTML = CalculateBill; 
}

// AddEVentListener function
Button.addEventListener("click", CalculationTIP);