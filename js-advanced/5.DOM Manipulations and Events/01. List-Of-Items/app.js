function addItem() {
    let input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = input;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    document.getElementById('newItemText').value = ''
}