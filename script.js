'use strict';

const cards = [['Name of categories', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/image/cards/cry.jpg',
      audioSrc: 'assets/audio/cards/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/image/cards/dance.jpg',
      audioSrc: 'assets/audio/cards/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/image/cards/dive.jpg',
      audioSrc: 'assets/audio/cards/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/image/cards/draw.jpg',
      audioSrc: 'assets/audio/cards/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/image/cards/fish.jpg',
      audioSrc: 'assets/audio/cards/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/image/cards/fly.jpg',
      audioSrc: 'assets/audio/cards/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/image/cards/hug.jpg',
      audioSrc: 'assets/audio/cards/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/image/cards/jump.jpg',
      audioSrc: 'assets/audio/cards/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'assets/image/cards/open.jpg',
      audioSrc: 'assets/audio/cards/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'assets/image/cards/play.jpg',
      audioSrc: 'assets/audio/cards/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'assets/image/cards/point.jpg',
      audioSrc: 'assets/audio/cards/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'assets/image/cards/ride.jpg',
      audioSrc: 'assets/audio/cards/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'assets/image/cards/run.jpg',
      audioSrc: 'assets/audio/cards/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'assets/image/cards/sing.jpg',
      audioSrc: 'assets/audio/cards/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'assets/image/cards/skip.jpg',
      audioSrc: 'assets/audio/cards/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'assets/image/cards/swim.jpg',
      audioSrc: 'assets/audio/cards/swim.mp3',
    },
  ],
  [
    {
      word: 'argue',
      translation: 'спорить',
      image: 'assets/image/cards/argue.jpg',
      audioSrc: 'assets/audio/cards/argue.mp3',
    },
    {
      word: 'build',
      translation: 'строить',
      image: 'assets/image/cards/build.jpg',
      audioSrc: 'assets/audio/cards/build.mp3',
    },
    {
      word: 'carry',
      translation: 'нести',
      image: 'assets/image/cards/carry.jpg',
      audioSrc: 'assets/audio/cards/carry.mp3',
    },
    {
      word: 'catch',
      translation: 'ловить',
      image: 'assets/image/cards/catch.jpg',
      audioSrc: 'assets/audio/cards/catch.mp3',
    },
    {
      word: 'drive',
      translation: 'водить машину',
      image: 'assets/image/cards/drive.jpg',
      audioSrc: 'assets/audio/cards/drive.mp3',
    },
    {
      word: 'drop',
      translation: 'падать',
      image: 'assets/image/cards/drop.jpg',
      audioSrc: 'assets/audio/cards/drop.mp3',
    },
    {
      word: 'pull',
      translation: 'тянуть',
      image: 'assets/image/cards/pull.jpg',
      audioSrc: 'assets/audio/cards/pull.mp3',
    },
    {
      word: 'push',
      translation: 'толкать',
      image: 'assets/image/cards/push.jpg',
      audioSrc: 'assets/audio/cards/push.mp3',
    },
  ],
  [
    {
      word: 'big',
      translation: 'большой',
      image: 'assets/image/cards/big.jpg',
      audioSrc: 'assets/audio/cards/big.mp3',
    },
    {
      word: 'small',
      translation: 'маленький',
      image: 'assets/image/cards/small.jpg',
      audioSrc: 'assets/audio/cards/small.mp3',
    },
    {
      word: 'fast',
      translation: 'быстрый',
      image: 'assets/image/cards/fast.jpg',
      audioSrc: 'assets/audio/cards/fast.mp3',
    },
    {
      word: 'slow',
      translation: 'медленный',
      image: 'assets/image/cards/slow.jpg',
      audioSrc: 'assets/audio/cards/slow.mp3',
    },
    {
      word: 'friendly',
      translation: 'дружелюбный',
      image: 'assets/image/cards/friendly.jpg',
      audioSrc: 'assets/audio/cards/friendly.mp3',
    },
    {
      word: 'unfriendly',
      translation: 'недружелюбный',
      image: 'assets/image/cards/unfriendly.jpg',
      audioSrc: 'assets/audio/cards/unfriendly.mp3',
    },
    {
      word: 'young',
      translation: 'молодой',
      image: 'assets/image/cards/young.jpg',
      audioSrc: 'assets/audio/cards/young.mp3',
    },
    {
      word: 'old',
      translation: 'старый',
      image: 'assets/image/cards/old.jpg',
      audioSrc: 'assets/audio/cards/old.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'assets/image/cards/cat.jpg',
      audioSrc: 'assets/audio/cards/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'assets/image/cards/chick.jpg',
      audioSrc: 'assets/audio/cards/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'assets/image/cards/chicken.jpg',
      audioSrc: 'assets/audio/cards/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'assets/image/cards/dog.jpg',
      audioSrc: 'assets/audio/cards/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'assets/image/cards/horse.jpg',
      audioSrc: 'assets/audio/cards/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'assets/image/cards/pig.jpg',
      audioSrc: 'assets/audio/cards/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'assets/image/cards/rabbit.jpg',
      audioSrc: 'assets/audio/cards/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'assets/image/cards/sheep.jpg',
      audioSrc: 'assets/audio/cards/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'assets/image/cards/bird.jpg',
      audioSrc: 'assets/audio/cards/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'assets/image/cards/fishA.jpg',
      audioSrc: 'assets/audio/cards/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'assets/image/cards/frog.jpg',
      audioSrc: 'assets/audio/cards/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'assets/image/cards/giraffe.jpg',
      audioSrc: 'assets/audio/cards/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/image/cards/lion.jpg',
      audioSrc: 'assets/audio/cards/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'assets/image/cards/mouse.jpg',
      audioSrc: 'assets/audio/cards/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'assets/image/cards/turtle.jpg',
      audioSrc: 'assets/audio/cards/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'assets/image/cards/dolphin.jpg',
      audioSrc: 'assets/audio/cards/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'assets/image/cards/skirt.jpg',
      audioSrc: 'assets/audio/cards/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'assets/image/cards/pants.jpg',
      audioSrc: 'assets/audio/cards/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'assets/image/cards/blouse.jpg',
      audioSrc: 'assets/audio/cards/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'assets/image/cards/dress.jpg',
      audioSrc: 'assets/audio/cards/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'assets/image/cards/boot.jpg',
      audioSrc: 'assets/audio/cards/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'assets/image/cards/shirt.jpg',
      audioSrc: 'assets/audio/cards/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'assets/image/cards/coat.jpg',
      audioSrc: 'assets/audio/cards/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'assets/image/cards/shoe.jpg',
      audioSrc: 'assets/audio/cards/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/image/cards/sad.jpg',
      audioSrc: 'assets/audio/cards/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/image/cards/angry.jpg',
      audioSrc: 'assets/audio/cards/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/image/cards/happy.jpg',
      audioSrc: 'assets/audio/cards/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/image/cards/tired.jpg',
      audioSrc: 'assets/audio/cards/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'assets/image/cards/surprised.jpg',
      audioSrc: 'assets/audio/cards/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/image/cards/scared.jpg',
      audioSrc: 'assets/audio/cards/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/image/cards/smile.jpg',
      audioSrc: 'assets/audio/cards/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/image/cards/laugh.jpg',
      audioSrc: 'assets/audio/cards/laugh.mp3',
    },
  ],
];

const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger');
const switchMode = document.querySelector('.switch');
const contentPage = document.querySelector('main');

const categoriesSection = document.querySelector('.categories-section');
const cardsSection = document.querySelector('.cards-section');
const statisticsSection = document.querySelector('#statistics');
const cardsContainer = document.querySelector('.cards-container');
const startGameButton = document.querySelector('.game-button');
const audio = document.querySelector('#player');
const cardsOfCategory = cardsContainer.children;
const pageName = document.querySelector('.page-name');
const goHome = document.querySelector('.home');
const endGameBox = document.querySelector('.end-game');
const starContainer = document.querySelector('.star-container');
const tbody = document.querySelector('tbody');
const resetButton = document.querySelector('.reset');

let isPlay = false;
let isCard;
let isCategoryNumber;
let error;
let errorAmount = 0;
let cardsAmount = -1;
let arrRandom = [];
function createLink(categoryNumber) {
  const link = document.createElement('a');
  link.href = '#cards';
  link.categoryName = cards[0][categoryNumber];
  link.categoryNumber = categoryNumber;

  return link;
}

function createMenu() {
  for (let i = cards[0].length - 1; i > 0; i--) {
    const li = document.createElement('li');
    const linkMenu = createLink(i);

    linkMenu.innerText = linkMenu.categoryName;

    li.append(linkMenu);
    menu.children[0].after(li);
  }
}

function hide() {
  goHome.style.display = 'none';
  for (let index = 0; index < contentPage.children.length; index++) {
    contentPage.children[index].style.display = 'none';
  }
}

function resetGame() {
  isCard = '';
  errorAmount = 0;
  startGameButton.classList.remove('repeat');
  cardsAmount = -1;
  arrRandom = [];
  if (isCategoryNumber > 0) {
    for (let index = 0; index < cards[isCategoryNumber].length; index++) {
      cardsOfCategory[index].classList.remove('disable');
    }
  }
  starContainer.innerHTML = '';
}

function goToMainPage() {
  endGameBox.style.display = 'none';
  hide();
  categoriesSection.style.display = 'flex';
  resetGame();
}

function setParametr(object, property) {
  const obj = JSON.parse(localStorage.getItem(object.key));
  const n = obj[property];
  obj[property] = n + 1;
  let percent;
  if ((obj.errorAnswerNumber === 0) && (obj.correctAnswerNumber === 0)) {
    percent = 0;
  } else {
    percent = obj.errorAnswerNumber / (obj.correctAnswerNumber + obj.errorAnswerNumber);
  }

  obj.percentError = Math.round(percent * 100);
  localStorage.setItem(object.key, JSON.stringify(obj));
}

function addStar(err) {
  const star = document.createElement('img');
  if (err) {
    star.src = 'assets/image/star.svg';
  } else {
    star.src = 'assets/image/star-win.svg';
  }
  starContainer.append(star);
}

function endGame() {
  const gameResult = document.querySelector('.game-result');
  const gameResultImage = document.querySelector('.end-game > img');
  if (errorAmount === 0) {
    gameResult.innerText = 'Win!';
    gameResultImage.src = 'assets/image/success.jpg';
    audio.src = 'assets/audio/success.mp3';
    audio.play();
  } else {
    if (errorAmount === 1) {
      gameResult.innerText = '1 Error';
    } else {
      gameResult.innerText = `${errorAmount}Errors`;
    }
    gameResultImage.src = 'assets/image/failure.jpg';
    audio.src = 'assets/audio/failure.mp3';
    audio.play();
  }

  hide();
  endGameBox.style.display = 'block';

  setTimeout(() => {
    goToMainPage();
  }, 3000);
}

function generateCards(CatNumber) {
  cardsContainer.innerHTML = '';
  const CategoryNumber = CatNumber;
  let CardNumber = 0;
  let CardElement;
  for (CardNumber = 0; CardNumber < cards[CategoryNumber].length; CardNumber++) {
    CardElement = document.createElement('div');
    CardElement.classList.add('container');
    CardElement.classList.add('response-block');
    CardElement.innerHTML = '<div class="response-content"><div class="flipper"><div class="front mp3"><img class="mp3"><div class="header mp3"><h4 class=" mp3"></h4><div class= "rotate"></div></div></div><div class="back"><img><h4></h4></div></div></div>';


    CardElement.key = `${cards[CategoryNumber][CardNumber].word}${cards[0][CategoryNumber]}`;

    CardElement.word = cards[CategoryNumber][CardNumber].word;
    CardElement.image = cards[CategoryNumber][CardNumber].image;
    CardElement.translation = cards[CategoryNumber][CardNumber].translation;
    CardElement.audioSrc = cards[CategoryNumber][CardNumber].audioSrc;

    const image = CardElement.children[0].children[0].children[0].children[0];
    const word = CardElement.children[0].children[0].children[0].children[1].children[0];
    const imageBack = CardElement.children[0].children[0].children[1].children[0];
    const translate = CardElement.children[0].children[0].children[1].children[1];
    image.src = CardElement.image;
    imageBack.src = CardElement.image;
    translate.innerText = CardElement.translation;
    word.innerText = CardElement.word;

    CardElement.addEventListener('mouseleave', (event) => {
      event.currentTarget.children[0].children[0].classList.remove('container-hover-flipper');
    });

    CardElement.addEventListener('click', (event) => {
      if (isPlay === false) {
        if (event.target.classList.contains('mp3')) {
          audio.src = event.currentTarget.audioSrc;
          audio.play();

          setParametr(event.currentTarget, 'trainingAmount');
        }
        if (event.target.classList.contains('rotate')) {
          event.currentTarget.children[0].children[0].classList.add('container-hover-flipper');
        }
      } else if (event.currentTarget === isCard) {
        error = false;
        audio.src = 'assets/audio/correct.mp3';
        event.currentTarget.classList.add('disable');
        addStar(error);
        setParametr(isCard, 'correctAnswerNumber');
        if (cardsAmount === cards[isCategoryNumber].length - 1) {
          setTimeout(() => {
            endGame();
          }, 1000);

          return false;
        }

        cardsAmount++;

        isCard = arrRandom[cardsAmount];
        setTimeout(() => {
          audio.src = isCard.audioSrc;
          audio.play();
        }, 1000);
        audio.play();
      } else if (!(event.currentTarget.classList.contains('disable')) && isCard) {
        error = true;

        setParametr(isCard, 'errorAnswerNumber');


        errorAmount++;
        audio.src = 'assets/audio/error.mp3';
        audio.play();
        addStar(error);
      }
    });

    cardsContainer.append(CardElement);
  }
}

function goToCardsPage(Categoty) {
  isCategoryNumber = Categoty.categoryNumber;
  hide();
  goHome.style.display = 'inline-block';
  cardsSection.style.display = 'block';
  pageName.innerText = Categoty.categoryName;
  generateCards(Categoty.categoryNumber);
  resetGame();
  for (let index = 0; index < cardsOfCategory.length; index++) {
    if (isPlay) {
      const head = cardsOfCategory[index].firstElementChild.firstElementChild.firstElementChild.lastElementChild;
      head.style.display = 'none';
    } else {
      const head = cardsOfCategory[index].firstElementChild.firstElementChild.firstElementChild.lastElementChild;
      head.style.display = 'block';
    }
  }
}

function createTableRow(object) {
  const tr = document.createElement('tr');
  tr.innerHTML = '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>';
  tr.children[0].innerText = object.word;
  tr.children[1].innerText = object.category;
  tr.children[2].innerText = object.trainingAmount;
  tr.children[3].innerText = object.correctAnswerNumber;
  tr.children[4].innerText = object.errorAnswerNumber;
  tr.children[5].innerText = object.percentError;
  tbody.append(tr);
}

function updateLocalStorage() {
  tbody.innerHTML = '';
  for (let i = 1; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      const key = `${cards[i][j].word}${cards[0][i]}`;
      const obj = JSON.parse(localStorage.getItem(key));
      createTableRow(obj);
    }
  }
}

function goToStatisticsPage() {
  updateLocalStorage();
  hide();

  statisticsSection.style.display = 'block';
  goHome.style.display = 'inline-block';
  resetGame();
}

function createMainPage() {
  for (let i = 1; i < cards[0].length; i++) {
    const linkCategory = createLink(i);
    linkCategory.innerHTML = '<div><img  alt=""><h3>Actions</h3></div></div>';
    linkCategory.classList.add('response-block');
    linkCategory.classList.add('category');
    linkCategory.children[0].classList.add('response-content');
    linkCategory.children[0].classList.add('categories-content');
    linkCategory.children[0].children[0].setAttribute('src', cards[i][1].image);
    linkCategory.children[0].children[1].innerText = linkCategory.categoryName;
    categoriesSection.append(linkCategory);
    linkCategory.addEventListener('click', (event) => {
      goToCardsPage(event.currentTarget);
      isCategoryNumber = event.currentTarget.categoryNumber;
    });
  }
}

document.addEventListener('click', (event) => {
  if (event.target !== menu && event.target !== burger) {
    burger.checked = false;
  }

  if (event.target.nodeName === 'A') {
    for (let index = 0; index < menu.children.length; index++) {
      menu.children[index].firstElementChild.style.textDecoration = 'none';
    }

    event.target.style.textDecoration = 'underline';
    const href = event.target.getAttribute('href');

    switch (href) {
      case '#main': goToMainPage(); break;
      case '#cards': goToCardsPage(event.target); break;
      case '#statistics': goToStatisticsPage(); break;
    }

    return false;
  }
});

createMenu();
createMainPage();

startGameButton.style.display = 'none';
switchMode.checked = false;


switchMode.addEventListener('click', () => {
  if (switchMode.checked) {
    isPlay = true;
    startGameButton.style.display = 'block';
    menu.classList.add('menu-orange');

    if (cardsOfCategory) {
      for (let index = 0; index < cardsOfCategory.length; index++) {
        const head = cardsOfCategory[index].firstElementChild.firstElementChild.firstElementChild.lastElementChild;
        head.style.display = 'none';
      }
    }


    for (let index = 0; index < categoriesSection.children.length; index++) {
      categoriesSection.children[index].children[0].classList.add('orange');
    }
  } else {
    resetGame();
    if (cardsOfCategory) {
      for (let index = 0; index < cardsOfCategory.length; index++) {
        const head = cardsOfCategory[index].firstElementChild.firstElementChild.firstElementChild.lastElementChild;
        head.style.display = 'block';
      }
    }
    startGameButton.style.display = 'none';
    startGameButton.classList.remove('repeat');
    isPlay = false;
    menu.classList.remove('menu-orange');
    for (let index = 0; index < categoriesSection.children.length; index++) {
      categoriesSection.children[index].children[0].classList.remove('orange');
    }
  }
});

startGameButton.addEventListener('click', () => {
  if (cardsAmount === -1) {
    startGameButton.classList.add('repeat');
    const n = cards[isCategoryNumber].length;


    shuffle(n).forEach((item) => {
      arrRandom.push(cardsOfCategory[item]);
    });
    cardsAmount++;


    isCard = arrRandom[cardsAmount];
    audio.src = isCard.audioSrc;
    audio.play();
  }
  if (cardsAmount >= 0) {
    audio.src = isCard.audioSrc;
    audio.play();
  }
});

function shuffle(n) {
  const numPool = [];
  for (let index = 0; index < n; index++) {
    numPool.push(index);
  }

  for (
    let j, x, i = numPool.length; i;
    j = parseInt(Math.random() * i),
    x = numPool[--i],
    numPool[i] = numPool[j],
    numPool[j] = x
  );

  return numPool;
}

function sorting(number, direction) {
  const rowsArray = [];
  for (let index = 0; index < tbody.children.length; index++) {
    rowsArray.push(tbody.children[index]);
  }
  const i = number;

  function compareDown(a, b) {
    if (a.children[i].innerText < b.children[i].innerText) {
      return -1;
    }
    if (a.children[i].innerText > b.children[i].innerText) {
      return 1;
    }
    return 0;
  }

  function compareUp(a, b) {
    if (a.children[i].innerText < b.children[i].innerText) {
      return 1;
    }
    if (a.children[i].innerText > b.children[i].innerText) {
      return -1;
    }
    return 0;
  }

  if (direction === 'up') {
    rowsArray.sort(compareUp);
  } else {
    rowsArray.sort(compareDown);
  }

  return rowsArray;
}

const rowHead = document.querySelector('.row-head');
for (let index = 0; index < rowHead.children.length; index++) {
  rowHead.children[index].number = index;
}


rowHead.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    const n = event.target.parentNode.number;
    let dir;
    if (event.target.classList.contains('up')) {
      dir = 'up';
    } else {
      dir = 'down';
    }


    const arr = sorting(n, dir);
    tbody.innerHTML = '';
    for (let index = 0; index < arr.length; index++) {
      tbody.append(arr[index]);
    }
  }
});

function createLocalStorageObjects() {
  tbody.innerHTML = '';
  for (let i = 1; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      const key = `${cards[i][j].word}${cards[0][i]}`;
      const obj = {
        word: `${cards[i][j].word}`,
        category: `${cards[0][i]}`,
        trainingAmount: 0,
        correctAnswerNumber: 0,
        errorAnswerNumber: 0,

        percentError: 0,
      };
      localStorage.setItem(key, JSON.stringify(obj));
      createTableRow(obj);
    }
  }
}


resetButton.addEventListener('click', () => {
  createLocalStorageObjects();
});

if (!(localStorage.getItem('localSet'))) {
  createLocalStorageObjects();
  localStorage.setItem('localSet', true);
}
