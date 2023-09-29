const colorPicker = document.getElementById('color-picker');
const generateButton = document.getElementById('generate-button');
const selectedColor = document.getElementById('selected-color');
const color_Code = document.getElementById('color-code');

// Initialize with the default color
let currentColor = colorPicker.value;

// Update the selected color and color code
function updateColorInfo() {
    selectedColor.textContent = currentColor;
    color_Code.textContent = currentColor;
}

// Event listener for the color picker
colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
    document.body.style.backgroundColor = currentColor;
    updateColorInfo();
});

// Event listener for the generate button
generateButton.addEventListener('click', () => {
    currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = currentColor;
    colorPicker.value = currentColor; // Update the color picker value
    updateColorInfo();
});



