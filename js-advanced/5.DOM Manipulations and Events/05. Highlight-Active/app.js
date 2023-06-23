function focused() {
   console.log( Array.from(document.querySelectorAll('input'))
   .forEach(i => {
    i.addEventListener('focus',onFocus),
    i.addEventListener('blur',blurred)
   }
   ))
   function onFocus(event){
     let  parent = event.target.parentElement;
     parent.className = 'focused';
   }
   function blurred(event){
   event.target.parentElement.className = ''
   }
}