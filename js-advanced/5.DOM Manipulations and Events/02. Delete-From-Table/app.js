function deleteByEmail() {
    let input = document.querySelector('input[name="email"]').value;
    let table = Array.from(document.querySelectorAll('tbody tr'));
    
    let isFound = false;
    
    for(let current of table){
    let email = (current.children[1]).textContent;
    if(input == email){
    let parent = current.parentElement;
    parent.removeChild(current);
    isFound = true;
    }
    }
    let result = document.getElementById('result')
    isFound ? result.textContent = 'Deleted.': result.textContent = 'Not Found.'
    
}