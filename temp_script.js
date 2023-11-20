document.addEventListener("DOMContentLoaded", function() {
    function validateInput() {
        let inputField = document.getElementById('temperature');
        let inputValue = inputField.value.trim();

        if (isNaN(inputValue)) {
            alert('Please enter a valid number for the temperature.');
            inputField.value = '';
        }
    }

    function convertTemperature() {
        let inputField = document.getElementById('temperature');
        let unitSelector = document.getElementById('unit');
        let resultDisplay = document.getElementById('result');

        let temperature = parseFloat(inputField.value);
        let selectedUnit = unitSelector.value;

        if (isNaN(temperature)) {
            alert('Please enter a valid number for the temperature.');
            inputField.value = '';
            resultDisplay.textContent = '';
            return;
        }

        let convertedTemperature;
        let resultUnit;

        if (selectedUnit === 'celsius') {
            convertedTemperature = (temperature * 9) / 5 + 32;
            resultUnit = 'Fahrenheit';
        } else {
            convertedTemperature = ((temperature - 32) * 5) / 9;
            resultUnit = 'Celsius';
        }

        resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    }

    window.validateInput = validateInput;
    window.convertTemperature = convertTemperature;
});
