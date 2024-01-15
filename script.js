'use strict';

let random = Math.trunc(Math.random()*20)+1;
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;

let messageCheck = function(){
    let guess = Number(document.querySelector('.guess').value);

    if(guess === random){
        message.textContent = 'You number is correct!';
        document.querySelector('body').style.backgroundColor = 'rgb(126, 255, 101)';
        let number = document.querySelector('.number').textContent = random;
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(!guess){
        message.textContent = 'Please enter a Number'
    } else if(guess !== random){
        if(score>1){
            message.textContent = (guess>random? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = 'You lost the game';
        }
    }
}

let restore = function(){
    score = 20;
    random = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    console.log(random);
    document.querySelector('.score').textContent = score;
    message.textContent = 'START GUESSING...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(255, 232, 232)';
}

document.querySelector('.check').addEventListener('click', messageCheck);
document.querySelector('.again').addEventListener('click', restore);
document.addEventListener('keydown', function(event){
    if(event.key === 'Escape')
        restore();
})
