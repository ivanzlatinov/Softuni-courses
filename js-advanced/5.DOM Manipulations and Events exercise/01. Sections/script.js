function create(words) {
 
let mainDiv = document.getElementById('content');
  for(let word of words){
   let div = document.createElement('div');
   let p = document.createElement('p');
   p.textContent = word;
   p.style.display = 'none'
div.appendChild(p);
div.addEventListener('click',showText);
mainDiv.appendChild(div);
function showText(event){
   p.style.display = '';
     }
  }
 

}