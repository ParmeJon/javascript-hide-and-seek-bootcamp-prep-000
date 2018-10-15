function getFirstSelector(selector) {
  const firstSelection = document.querySelector(selector);
  return firstSelection;
}

function nestedTarget() {
  const targetNested = document.querySelector("#nested .target");
  return targetNested
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLists.length; i++ ) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var startingNode = document.querySelector('#grand-node');
  var deeperNode = startingNode[0];
  while( isNaN(startingNode) ) {
    startingNode = startingNode[0];
  }
  return startingNode;
}