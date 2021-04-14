const checkAns = (ev) => {
  if (myAnswer.value != "KINGQUEST") {
    myAnswer.setCustomValidity("Not right, go back and try again");
  } else {
    myAnswer.setCustomValidity('');
  }
};

function changecss(myAnswer) {
  if (myAnswer.value == "KINGQUEST") {
    var el = document.querySelector(".praise");
    document.querySelector(".praise").style.display = "flex"; // this does not work yet but also doesnt caues any error so left in for now
  }
};



myAnswer.addEventListener('change', checkAns, changecss);



discountcode.addEventListener('submit', ev => {
  alert(`discount code: KingArthursQuest19`)
  discountcode.reset();
  ev.preventDefault();
});
