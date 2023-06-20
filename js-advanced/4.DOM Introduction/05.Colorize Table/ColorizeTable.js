function colorize() {
    let rows = document.querySelectorAll('tr:nth-child(2n)');
   for(let row of rows){
       row.style.background = 'teal';
   }
}