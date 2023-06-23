function encodeAndDecodeMessages() {
   let inputArea = document.querySelectorAll('textarea')[0];
   let receivedArea = document.querySelectorAll('textarea')[1];
   let encodeButton = document.querySelectorAll('button')[0];
   let decodeButton = document.querySelectorAll('button')[1];
   encodeButton.addEventListener('click', encode)
   decodeButton.addEventListener('click',decode)
   function encode(event){
    let inputValue = inputArea.value
inputValue.split('')
let result = []
    for(let char of inputValue){
        let current  = char.charCodeAt() + 1;
         let nextChar = String.fromCharCode(current);
         result.push(nextChar)
    }
   receivedArea.value = result.join('');
   inputArea.value = ''
   }


   function decode(event){
  let result = [];
  let splited = receivedArea.value.split('');
  for(let char of splited){
    let current = char.charCodeAt() - 1;
    let wanted = String.fromCharCode(current);
    result.push(wanted)
  }
  receivedArea.value = result.join("");
   }
}