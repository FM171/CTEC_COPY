"use strict";

query.addEventListener('change', ev => {
	while(results.firstChild) {
		results.firstChild.remove();
	}
	if(!query.value) {
		return;
	}
	const filteredData = articleData.filter(item => {
		return item.name.includes(query.value);
	});
	const articles = filteredData.map(buildResultFromData);
	articles.forEach(article => results.appendChild(article));
	if(!articles.length) {
		const li = document.createElement('li');
		li.textContent = `No results found for "${query.value}"`;
		results.appendChild(li);
	}
});


function buildResultFromData(data) {
	const li = document.createElement('li');
	const a = document.createElement('a');



	a.textContent = data.title;
	li.appendChild(a);
	return li;
}
