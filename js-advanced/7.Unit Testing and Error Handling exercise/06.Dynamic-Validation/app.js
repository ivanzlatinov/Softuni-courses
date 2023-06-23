function validate() {
    let inputEl = document.getElementById('email');
    inputEl.addEventListener('change',changing)
    function changing(){
        
            if(/^[a-z]+@[a-z]+\.[a-z]+$/gm.test(inputEl.value) == false){{
                inputEl.classList.add('error')
            }}else {
                inputEl.classList.remove('error')
            }
       
    }
}