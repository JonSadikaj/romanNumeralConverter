const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const romVal = [
    { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" }, { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" }, { value: 100, symbol: "C" }, { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" }, { value: 40, symbol: "XL" }, { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" }, { value: 5, symbol: "V" }, { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

function convertToRoman(num) {
    let romanString = "";
    for (let i = 0; i < romVal.length; i++) {
        while (num >= romVal[i].value) {
            romanString += romVal[i].symbol;
            num -= romVal[i].value;
        }
    }
    return romanString;
}

convertBtn.addEventListener("click", () => {
    const num = parseInt(numberInput.value, 10);
    
    if (isNaN(num) || numberInput.value === "") {
        result.textContent = "Please enter a valid number";
    } else if (num < 1) {
        result.textContent = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        result.textContent = "Please enter a number less than or equal to 3999";
    } else {
        result.textContent = convertToRoman(num);
    }
});
