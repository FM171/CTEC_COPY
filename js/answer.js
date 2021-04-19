const checkAns = (ev) => {
  if (myAnswer.value != "KINGQUEST") {
    myAnswer.setCustomValidity("Not right, go back and try again");
  } else {
    myAnswer.setCustomValidity('');
  }
};

const changecss = (ev) => {
  let el = document.getElementById('praise');
  if (el.className === 'praise'){
  el.className = '';
} else {
  el.className = 'praise';
}
};



myAnswer.addEventListener('change', checkAns, changecss);



discountcode.addEventListener('submit', ev => {
  //document.getElementById("praise").removeAttribute("color");
   document.getElementById('praise').style.display = "flex";
   document.getElementById('praise').style.display = "flex";
  alert(`discount code: KingArthursQuest19`)
  discountcode.reset();
  ev.preventDefault();
});
