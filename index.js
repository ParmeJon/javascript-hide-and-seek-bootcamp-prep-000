function getFirstSelector(selector) {
  const firstSelection = document.querySelector(selector);
  return firstSelection;
}

function nestedTarget() {
  const targetNested = document.querySelector("#nested .target");
  return targetNested
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedLists.length; i++ ) {
    var parsedList = parseInt(rankedLists[i].innerHTML) ;
    
  }
}

function deepestChild() {
  
}