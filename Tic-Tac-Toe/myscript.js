// restart game button
var restart = document.querySelector("#b");
// grabs the all squares
var squares = document.querySelectorAll('td');
// clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }

}
restart.addEventListener('click', clearBoard)
// check the squers marker

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O'
  }else {
    this.textContent = '';
  }

}

// For loop to add event listners to all the squres
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
