function getFirstSelector(selector) {
  const firstSelection = document.getElementById('app').querySelector('selector');
  return firstSeleciton;
}

function nestedTarget() {
  document.querySelector('.target #nested');
}

function increaseRankBy(n) {
  var rankedLists = parseInt(document.querySelectorAll('.ranked-list'));
  for (let i = 0; i < rankedLists.length; i++ ) {
   rankedLists[i].innerHTML += n;
  }
}

function deepestChild() {
  
}