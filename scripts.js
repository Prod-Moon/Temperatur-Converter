const result = document.querySelector(".result")
const submitButton = document.querySelector(".submitButton")
const celsius = document.querySelector("#celsius")
const fahrenheit = document.querySelector("#fahrenheit")


function convertTemperature() {
    let userInput = document.querySelector("#userInput").value;
    const userData = Number(userInput)
   
    if (isNaN(userData)) {
        result.textContent = "Please enter a valid input"
        return;
    }

   let convertedResult;
   if (fahrenheit.checked) {
    convertedResult = Math.floor((userData - 32) * 5 / 9);
    result.textContent = `${userData}℉ is equals to ${convertedResult}℃`;
    }

    else if(celsius.checked) {
    convertedResult = Math.floor((userData * 9 / 5) + 32);
    result.textContent = `${userData}℃ is equals to ${convertedResult}℉`;
    }

    else {
        result.textContent = "You did'nt select a conversion type"
    }

    userInput = document.querySelector("#userInput").value = "";
}

submitButton.addEventListener("click", convertTemperature);