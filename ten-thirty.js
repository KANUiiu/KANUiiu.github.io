let cards = [
    "images/card-j.png",
    "images/card-q.png",
    "images/card-k.png",
    "images/card-ace.png",
    "images/card-2.png",
    "images/card-3.png",
    "images/card-4.png",
    "images/card-5.png",
    "images/card-6.png",
    "images/card-7.png",
    "images/card-8.png",
    "images/card-9.png",
    "images/card-10.png",
]
let sum = 0;
let messageEl = document.getElementById("message-el");
let cardOneNum = 0;
let cardTwoNum = 0;
let cardThreeNum = 0;
let cardFourNum = 0;
let cardFiveNum = 0;
let isTimeToPlay = false;
let clickCount = 0;
let cardOne = document.getElementById("card1");
let cardTwo = document.getElementById("card2");
let cardThree = document.getElementById("card3");
let cardFour = document.getElementById("card4");
let cardFive = document.getElementById("card5");
let oneMoreCard = document.getElementById("one-more-card");
let oneMoreGame = document.getElementById("one-more-game");
let start = document.getElementById("start");
let tellTime = document.getElementById("tell-time");

start.addEventListener("click", function() {
    isTimeToPlay = true;
    let cardIndex = Math.floor(Math.random() * 13);
    cardOne.src = cards[cardIndex];
    showOneMoreCard();
    start.setAttribute("hidden", true);
    cardOneNum = getCardValue(cardIndex);
    sum = cardOneNum;
    tellTime.textContent = formatTime(sum);
});

oneMoreGame.addEventListener("click", function() {
    isTimeToPlay = false;
    clickCount = 0;
    cardOne.src = "images/card-back.png";
    cardTwo.src = "images/card-back.png";
    cardThree.src = "images/card-back.png";
    cardFour.src = "images/card-back.png";
    cardFive.src = "images/card-back.png";
    start.removeAttribute("hidden");
    oneMoreGame.setAttribute("hidden", true);
    tellTime.textContent = "";
});


function getCardValue(cardIndex) {
    if (cardIndex < 3) {
        return 0.5;
    } else if (cardIndex < 4) {
        return 1;
    } else if (cardIndex < 5) {
        return 2;
    } else if (cardIndex < 6) {
        return 3;
    } else if (cardIndex < 7) {
        return 4;
    } else if (cardIndex < 8) {
        return 5;
    } else if (cardIndex < 9) {
        return 6;
    } else if (cardIndex < 10) {
        return 7;
    } else if (cardIndex < 11) {
        return 8;
    } else if (cardIndex < 12) {
        return 9;
    } else {
        return 10;
    }
}

function showOneMoreCard() {
    oneMoreCard.removeAttribute("hidden");
}

function formatTime(total) {
    let integerPart = Math.floor(total);
    let decimalPart = total - integerPart;
    
    if (integerPart < 1) {
        return `現在還沒1點。`;
    } else if (decimalPart === 0.5) {
        return `現在已經 ${integerPart} 點半了。`;
    } else if (decimalPart === 0.0) {
        return `現在已經 ${integerPart} 點了。`;
    } else {
        return `現在已經 ${total} 點了。`;  // 顯示完整小數
    }
}

oneMoreCard.addEventListener("click", function() {
    clickCount++;
    if (clickCount <= 4) {
        let cardIndex = Math.floor(Math.random() * 13);
        let cardValue = getCardValue(cardIndex);
        
        if (clickCount === 1) {
            cardTwo.src = cards[cardIndex];
            cardTwoNum = cardValue;
        } else if (clickCount === 2) {
            cardThree.src = cards[cardIndex];
            cardThreeNum = cardValue;
        } else if (clickCount === 3) {
            cardFour.src = cards[cardIndex];
            cardFourNum = cardValue;
        } else if (clickCount === 4) {
            cardFive.src = cards[cardIndex];
            cardFiveNum = cardValue;
        }
        
        sum += cardValue;
        
        if (clickCount === 4 && sum < 10.5){
            tellTime.textContent = "還沒十點半！要不要再玩？";
            oneMoreCard.setAttribute("hidden", true); // 禁用抽牌按鈕
            oneMoreGame.removeAttribute("hidden");
        }else if(sum === 10.5) {
            tellTime.textContent = "準時！剛好十點半！";
            oneMoreCard.setAttribute("hidden", true); // 禁用抽牌按鈕
            oneMoreGame.removeAttribute("hidden");
        } else if(sum > 10.5) {
            tellTime.textContent = "超過十點半了！";
            oneMoreCard.setAttribute("hidden", true); // 禁用抽牌按鈕
            oneMoreGame.removeAttribute("hidden");
        } else {
            tellTime.textContent = formatTime(sum);
        }
    } else {
        tellTime.textContent = "無法再加牌了！";
        isTimeToPlay = false;
        clickCount = 0;
        cardOne.src = "images/card-back.png";
        cardTwo.src = "images/card-back.png";
        cardThree.src = "images/card-back.png";
        cardFour.src = "images/card-back.png";
        cardFive.src = "images/card-back.png";
        start.removeAttribute("hidden");
        oneMoreGame.setAttribute("hidden", true);
    }
});
