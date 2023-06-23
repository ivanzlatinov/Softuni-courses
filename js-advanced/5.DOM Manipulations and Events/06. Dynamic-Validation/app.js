function validate() {
    let input = document.getElementById('email');
    console.log(input)
    input.addEventListener('change',validator)
    function validator(event){
        if(/([a-z]*\@[a-z]*\.[a-z]*)/g.test(input.value) == true){
            if(input.value.toLowerCase() === input.value){
               input.classList.remove('error')
            }
            }else{
              input.classList.add('error');
            }
    }
}