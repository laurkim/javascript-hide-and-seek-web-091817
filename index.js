function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested');
};

function deepestChild() {
  // debugger;
  let grandNode = document.getElementById('grand-node');
  let children = grandNode.querySelectorAll('div');
  let lastChild = children[children.length - 1];
  return lastChild;
};

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('ul.ranked-list li');
  // debugger;
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}
