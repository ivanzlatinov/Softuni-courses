function loadRepos() {
	const username = document.getElementById('username').value;
    let list = document.getElementById('repos');

	fetch(`https://api.github.com/users/${username}/repos`)
	.then(res => res.json())
	.then(displayRepos);

	function displayRepos(data){
		list.innerHTML = '';
		for(let repo of data){


		}
	}

}