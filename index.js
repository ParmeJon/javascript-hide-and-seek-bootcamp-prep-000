function getFirstSelector(selector) {
  const firstSelection = document.querySelector(selector);
  return firstSelection;
}

function nestedTarget() {
  const targetNested = document.querySelector("#nested .target");
  return targetNested
}

function increaseRankBy(n) {
  var rankedLists = parseInt(document.querySelectorAll('.ranked-list li'));
  for (let i = 0; i < rankedLists.length; i++ ) {
    rankedLists[i] += n;
  }
}

function deepestChild() {
  
}