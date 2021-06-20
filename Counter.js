// Function with increase by 1 
const increase = document.getElementById("increment"); 

count = 0; 

let Increasement = () => { 
    let Number = document.getElementById("number"); 
    count += 1; 
    Number.innerHTML = count; 
    console.log(count); 
} 

increase.addEventListener("click", Increasement); 

// Function with decrease by 1 
const decrease = document.getElementById("decrement"); 

function Decreasement() { 
    let Number = document.getElementById("number"); 
    count -= 1; 
    Number.innerHTML = count; 
    console.log(count); 
} 
decrease.addEventListener("click", Decreasement);


