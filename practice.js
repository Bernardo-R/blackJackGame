let  messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let cards = []
let sum = 0
let message = ""
let isLive = false

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
isLive = true
let cardA = getRandomCard()
let cardB = getRandomCard()
cards = [cardA, cardB]
cardsEl.innerText = `Cards: ${cards[0]} ${cards[1]} `
sum = cardA + cardB
sumEl.innerText = `Sum ${sum}`
renderGame()

}

function renderGame(){
    if(sum === 21){
        message ="You are a Winner"
        isLive = false
         return messageEl.innerText = message
    }else{
        message ="Want to draw again?"
        if(isLive === false){
            message = "You Lose"
            return messageEl.innerText = message
        }
       return messageEl.innerText = message
    }

}

function newCard(){
    if(isLive && sum < 21){
    let cardC = getRandomCard()
    cards.push(cardC);
    cardsEl.innerText += ` ${cards[2]}`
    sum += cardC
    sumEl.innerText = `Sum ${sum}`
    isLive = false
    }
    renderGame()

}
