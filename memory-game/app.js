document.addEventListener('DOMContentLoaded', () => {
  
  // card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];


  cardArray.sort(() => 0.5 - Math.random())
  
  const btn = document.querySelector('.btn');
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  resultDisplay.textContent = 0;

  const msg = document.querySelector('.msg');

  btn.addEventListener('click', () => {
    location.reload();
  })

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = []; // array of pair of Matched cards


  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i) // id to image (0 to 11)
      card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img') // all image object
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // if match found then replace matched images with white images
    if (cardsChosen[0] == cardsChosen[1]) {
      alert("You've got a match!")
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute("src", "images/white.png");

      cardsWon.push(cardsChosen); // pushing matched cards to cardsWon array
    }
    // No matched found
    // so change clicked image back to blank image
    else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute("src", "images/blank.png");

      alert("Wrong match, Try again...");
    }

    // now clear two array cardsChosen and cardsChosenId for next turn
    cardsChosen = []
    cardsChosenId = []

    // update score
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArray.length / 2) {
      msg.textContent = "Congrutulations, You've found all match!";
    }
  }


  // when blank image is click this functions displays image from cardArray with index as blank image's id (index in for loop in createBoard)
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img); //  flipping blank image to corresponding image in cardArray based on blank image's id (index in for loop in createBoard)

    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500) // implement checkForMatch function after 500 sec
    }
  }

  createBoard();

})

