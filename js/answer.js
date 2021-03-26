const checkAns = (ev) => {
 if (myAnswer.value != "KingQuest") {
  myAnswer.setCustomValidity("Not right, go back and try again");
 } else {
  myAnswer.setCustomValidity('');
 }
};

myAnswer.addEventListener('change', checkAns);



discountcode.addEventListener('submit', ev => {
 alert(`discount code: KingArthursQuest19`)
 discountcode.reset();
 ev.preventDefault();
});
