function solve() {
  let text = document.getElementById('input').value;
  let output = document.getElementById('output');
  let splited = text.split(".").filter(s => s.length != 0);
  
  while(splited.length > 0){
    let textForParagraph = splited.splice(0,3).join('. ') + '.'
    let p = document.createElement('p');
    p.innerHTML = `${textForParagraph}`;
    document.getElementById('output').appendChild(p);
  }
 
  
}




// output.innerHTML += `<p> ${textForParagraph} </p>`  