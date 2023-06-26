async function solution() {
    try {
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        let response = await fetch(url);

        if(!response.ok){
            throw new Error()
        }

        let data = await response.json();

        data.forEach(article => {
            let articleEl = document.createElement('div');
            articleEl.classList.add('accordion');
            articleEl.innerHTML = 
            `
            <div class="head">
                  <span>${article.title}</span>
                  <button class="button" id="${article._id}" onclick="moreOnclick(event)">More</button>
            </div>
            <div class="extra"></div>      
            `
            let main = document.getElementById('main');
            main.appendChild(articleEl);
        })
    } catch (error) {
        
    }


    async function moreOnclick(e) {

    }
}