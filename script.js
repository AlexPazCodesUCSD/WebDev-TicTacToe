

//Here we connect variables to elements in the html file using their id's.
let announcement = document.getElementById('announcement')
let reset_button = document.getElementById('reset_button')
let boxes = Array.from(document.getElementsByClassName('box'))


let turn = 1
let marked_boxes = Array(9).fill(null) //these indicate marked boxes, they are all null since they aren't marked yet.
let gameEnd = 0
const winState = [ //array to check if boxes match a winning pattern
  [1,2,3],
  [1,5,9],
  [2,5,8],
  [1,4,7],
  [3,6,9],
  [3,5,7],
  [4,5,6],
  [7,8,9]
]

reset_button.addEventListener('click', reset) //making our reset button interactive and call the reset function when clicked.

const start = () => {
  boxes.forEach(box => box.addEventListener('click', clicked))
}


function clicked(x) {
  const id = x.target.id

  if(!marked_boxes[id]){
    marked_boxes[id] = turn
    if(turn == 1){
      //Make this part your chosen image for X
      x.target.innerHTML = "<img src = images/dog.png>"
    }

    else {
      //Make this part your chosen image for O
      x.target.innerHTML = "<img src = images/cat.jpg>"
    }

    if(victory() != false && !gameEnd) {
      if(turn == 1){
        //Announcement for when X wins
        announcement.innerHTML = "<h1>dog wins!</h1>"
      }

      else {
        //Announcement for when O wins
        announcement.innerHTML = "<h1>cat wins!</h1>"
      }
      gameEnd = 1;
    }

    turn = turn == 1 ? 2: 1 //this switches turn every time a box is clicked.
  }
}

function reset() {
  marked_boxes.fill(null) //make all the boxes null again.
  boxes.forEach( box => {
    box.innerHTML = "" //empty the html within the boxes.
  })

  turn = 1;
  gameEnd = 0;
  announcement.innerHTML = "<h1>tic tac toe</h1>"
}

function victory(){
  //set is given the value of one of the items in winState every loop so we can check for winning combination.
  for(const set of winState){ 
    let[a,b,c] = set

    //checks that every box in the combination is the same.
    if(marked_boxes[a] && (marked_boxes[b] == marked_boxes[a] && marked_boxes[c] == marked_boxes[a])){
      return[a,b,c]
    }
  }
  return false;
}

start()


