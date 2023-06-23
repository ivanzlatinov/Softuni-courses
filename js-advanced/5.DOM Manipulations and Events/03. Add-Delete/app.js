function addItem() {
  let input = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  li.textContent = input;
  let deleteButton = document.createElement('a');
  deleteButton.textContent = '[Delete]';
  deleteButton.href = '#';
li.appendChild(deleteButton);
deleteButton.addEventListener('click',deleteBtn);

function deleteBtn(event){
    deleteButton.parentElement.remove()
}

  let ul = document.querySelector("ul");
  ul.appendChild(li);
  document.getElementById("newItemText").value = "";

}
