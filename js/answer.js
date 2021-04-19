const checkAns = (ev) => {
  if (myAnswer.value != "KINGQUEST") {
    myAnswer.setCustomValidity("Not right, go back and try again");
  } else {
    myAnswer.setCustomValidity('');
  }
};




myAnswer.addEventListener('change', checkAns);



discountcode.addEventListener('submit', ev => {
  document.getElementById('praise').style.display = "flex";
  alert(`discount code: KingArthursQuest19`)
  discountcode.reset();
  ev.preventDefault();
});
