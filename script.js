const value_dict = {
    0: "Bronze",
    1: "Silver",
    2: "Gold",
    3: "Platinum"
}



const calculate_remainder = (amount, delta) => {
    if (delta < 0) {
        return amount % 10 ** Math.abs(delta)
    } else {
        return 0
    }
};


const convert_to = (amount, delta) => {
    return Math.floor(amount * 10 ** delta)
};



const convert = () => {
    let from_currency = parseInt(document.getElementById("from-in").value);
    let to_currency = parseInt(document.getElementById("to-in").value);
    let value = parseInt(document.getElementById("amount").value)
    let response_area = document.getElementById("response-area");

    let delta = from_currency - to_currency


    // Ensure that they have selected coins so we can convert
    if (isNaN(from_currency) || isNaN(to_currency)) {
        response_area.innerText = "ERROR: Both sides of the conversion must have a selected coin type."
        return
    }


    // Ensure we aren't converting to the same type of coin
    if (delta === 0) {
        response_area.innerText = "ERROR: Cannot convert from one coin to the same coin"
        return
    }


    const remainder = calculate_remainder(value, delta);
    const amount = convert_to(value, delta);


    let response = "";


    response += `${value_dict[to_currency]}: ${amount}`


    // Check if we can't go into a whole number of the new coins
    if (remainder !== 0) {
        response += `<br>${value_dict[from_currency]}: ${remainder}`
    }


    response_area.innerHTML = response
};