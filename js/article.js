"use strict";

const searchParams = new URLSearchParams(document.location.search);

const id = parseInt(searchParams.get("id"));

const data = articleData.find(item => {
	return item.id === id;
});

title.textContent = data.title;
image.alt = `${data.name}`;
description.textContent = data.description;
