function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(x => x.addEventListener('click',showMore))
    function showMore(event){
const profile = event.target.parentElement;
const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
if(isActive){
    let div = profile.querySelector('div');
   if(event.target.textContent == 'Show more'){
    
    div.style.display = 'block'
    event.target.textContent = 'Hide it';
   }else if(event.target.textContent == 'Hide it'){
    div.style.display = 'none'
    event.target.textContent = 'Show more'
   }
}
    }
}