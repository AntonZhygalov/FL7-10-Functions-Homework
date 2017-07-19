var beetwen = 5;
var prize = 0;
var chances = 3;
var prizeRate = 1;
var game = true;
var random = 0;
var askNumber = 0;
var multiply1 = 1;
var multiply2 = 1;

var params = function(multi1 = 1, multi2 = 1, prizeWin = 0) {
    beetwen = 5 * multi1;
    prize = prizeWin;
    chances = 3;
    prizeRate = 1 * multi2;
    random = Math.floor((Math.random() * beetwen) + 0);
    console.log(random);
    askNumber = prompt('Введіть число', );
}

var questions = function(questinOrder) {
    switch (questinOrder) {
        case 1:
            var ask = confirm("Чи бажаєте почати гру?");
            if (ask == true) {
                params();
            } else {
                console.log("Сьогодні ви не виграли мільйон, а могли...");
                game = false;
            }
            break;
        case 2:
            ask = confirm("Вітаємо ви вгадали! Чи бажаєте продовжити гру?");
            if (ask == true) {
                multiply1 *= 2;
                multiply2 *= 3;
                params(multiply1, multiply2, prize);
            } else {
                console.log("Дякуємо за гру, ваш виграш становить " + prize + "$");
                game = false;
            }
            break;
        case 3:
            console.log("Ваш виграш - 0$");
            ask = confirm("Ви програли. Чи бажаєте зіграти ще раз?");
            if (ask == true) {
                params();
            } else {
                console.log("Сьогодні ви не виграли мільйон, а могли...");
                game = false;
            }
            break;
        default:
            break;
    }
}
var gameStart = function() {
    while (game == true) {
        while (chances != 0) {
            if (chances == 3 && askNumber == random) {
                prize += (10 * prizeRate);
                questions(2);
                break;
            } else if (chances == 2 && askNumber == random) {
                prize += (5 * prizeRate);
                questions(2);
                break;
            } else if (chances == 1 && askNumber == random) {
                prize += (2 * prizeRate);
                questions(2);
                break;
            } else {
                chances--;
                if (chances != 0) {
                    askNumber = prompt('Не вгадали, залишилось ' + chances + ' спроби', );
                } else {
                    questions(3);
                }
            }
        }
    }
}

questions(1);
gameStart();