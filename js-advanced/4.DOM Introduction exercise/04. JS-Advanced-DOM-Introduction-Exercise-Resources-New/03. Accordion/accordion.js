function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    
    if(buttonElement.textContent == 'More'){
        document.getElementById('extra').style.display = 'block';
        buttonElement.textContent = 'Less';
        return;
    }else if(buttonElement.textContent == 'Less'){
        document.getElementById('extra').style.display = 'none';
        buttonElement.textContent = 'More';
        return;
    }
     
   
}