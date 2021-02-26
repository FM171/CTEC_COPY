"use strict";

myQuery.addEventListener('input', ev =>{
  const sections = Array.from(document.querySelectorAll('main section')).filter(section =>{
    return !section.dataset.name.includes(myQuery.value.toLowerCase());
  });
  for(const result of document.querySelectorAll('.hidden')){
    result.classList.remove('hidden');
  }
  for(const section of sections){
    section.classList.add("hidden")
  }
} )
