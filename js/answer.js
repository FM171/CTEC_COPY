const checkAns = (ev) => {
  if (myAnswer.value != "KingQuest") {
    myAnswer.setCustomValidity("Not right, go back and try again");
  } else {
    myAnswer.setCustomValidity('');
  }
};

function changecss(myAnswer) {
  if (myAnswer.value == "KingQuest") {
    var el = document.querySelector(".praise");
    document.querySelector(".praise").style.display = "flex";
  }
};



myAnswer.addEventListener('change', checkAns, changecss);



discountcode.addEventListener('submit', ev => {
  alert(`discount code: KingArthursQuest19`)
  discountcode.reset();
  ev.preventDefault();
});
