function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let optionTag = document.createElement('option');
    let menu = document.getElementById('menu');
    optionTag.textContent = textElement.value;
    optionTag.value = valueElement.value;
    menu.appendChild(optionTag);
    textElement.value = '';
    valueElement.value = '';
   
}