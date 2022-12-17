 // Get all the necessary elements
 const nameInput = document.getElementById('name-input');
 const backgroundColorInput = document.getElementById('background-color-input');
 const textColorInput = document.getElementById('text-color-input');
 const fontInput = document.querySelectorAll('input[name="font-input"]');
 const sizeInput = document.getElementById('size-input');
 const resetButton = document.getElementById('reset-button');
 const displayElement = document.getElementById('display');

 // Set the default values
 const defaultName = '';
 const defaultBackgroundColor = '#ffffff';
 const defaultTextColor = '#000000';
 const defaultFont = 'Arial';
 const defaultSize = 12;

 // Set the default values in the elements
 nameInput.value = defaultName;
 backgroundColorInput.value = defaultBackgroundColor;
 textColorInput.value = defaultTextColor;
 sizeInput.value = defaultSize;

 // Set the default font
 fontInput.forEach(font => {
     if (font.value === defaultFont) {
         font.checked = true;
     }
 });

 // Set the default text
 displayElement.innerHTML = defaultName;

 // Set the default background color
 document.body.style.backgroundColor = defaultBackgroundColor;

 // Set the default text color
 displayElement.style.color = defaultTextColor;

 // Set the default font size
 displayElement.style.fontSize = defaultSize + 'px';

 // Event listeners
 nameInput.addEventListener('input', updateName);
 backgroundColorInput.addEventListener('input', updateBackgroundColor);
 textColorInput.addEventListener('input', updateTextColor);
 fontInput.forEach(font => font.addEventListener('input', updateFont));
 sizeInput.addEventListener('input', updateSize);
 resetButton.addEventListener('click', resetForm);

 // Event handler functions

 function updateName() {
     displayElement.innerHTML = nameInput.value;
 }

 function updateBackgroundColor() {
     document.body.style.backgroundColor = backgroundColorInput.value;
 }

 function updateTextColor() {
     displayElement.style.color = textColorInput.value;
 }

 function updateFont() {
     displayElement.style.fontFamily = this.value;
 }

 function updateSize() {
     displayElement.style.fontSize = sizeInput.value + 'px';
 }

 function resetForm() {
     nameInput.value = defaultName;
     backgroundColorInput.value = defaultBackgroundColor;
     textColorInput.value = defaultTextColor;
     fontInput.forEach(font => {
         if (font.value === defaultFont) {
             font.checked = true;
         }
     });
     sizeInput.value = defaultSize;
     displayElement.innerHTML = defaultName;
     document.body.style.backgroundColor = defaultBackgroundColor;
     displayElement.style.color = defaultTextColor;
     displayElement.style.fontSize = defaultSize + 'px';
 }