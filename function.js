console.log("popcornHEHE")



//const scoreOfEach = document.getElementById("score-card")
//const eachChoices = document.getElementById("each-choices")
//const gameMent = document.getElementById("game-statement")


totalScore = {
    playerCho :0,
    compCho :0,
}



//get computer random choice
const getCompCh=() => {
    const choice = ['rock', 'paper', 'scissor']

    let randomNumber = Math.floor(Math.random()*3) 
    //console.log(choice[randomNumber])

  return choice[randomNumber]
} 



//getscore from attraibutes
const getScore = (playerCho, compCho) => {
 
    let score= 0;
    if (playerCho == compCho){
        score = 0
        } else if(playerCho == 'rock' && compCho == 'scissor'){
            score = 1
        } else if(playerCho == 'paper' && compCho == 'rock'){
            score = 1
        } else if(playerCho == 'scissor' && compCho == 'paper'){
            score = 1
        } else{
            score = -1
        } 
        return score
}


const statementView = (score, playerCho, compCho) => {
    console.log(score)
    console.log(playerCho)
    console.log(compCho)
    
    const scoreOfEach = document.getElementById("score-card")
    const eachChoices = document.getElementById("each-choices")
    const gameMent = document.getElementById("game-Statement")
 
    if (score == 0) {
        gameMent.innerHTML = `YOU ARE TIED`
    } else if (score == -1) {
        gameMent.innerHTML = `YOU HAVE LOST AHH! TRY AGAIN`
    } else {
        gameMent.innerHTML = `YOU WON! CONGO! AYYY!!!`
    }


    eachChoices.innerHTML = `<br>player : <spam style="color: black;">${playerCho}</spam> <br> computer : <spam style= "color: black;">${compCho}</spam>`

    scoreOfEach.innerHTML = `Your Score = ${totalScore['playerCho']}`
}


const endGameThanos = (playerCho, compCho) => {
    totalScore['playerCho'] = 0
    totalScore['compCho'] = 0

    const gameMent = document.getElementById("game-Statement")
    const eachChoices = document.getElementById("each-choices")
    const scoreOfEach = document.getElementById("score-card")
    gameMent.innerText = ''
    eachChoices.innerText = ''
    scoreOfEach.innerText = ''
}


endGameThanos()
//in playgame, player chooses a button, will be printed in the dom, how?
//out of three buttons, choose a query selector to select the class,
//then make a foreach loop on each button.
//send the loop to as an arguement.


//on onclick, display th estatements on player screen
function onclickF(playerCho) {
    //console.log({playerCho})
    compCho = getCompCh()
    //console.log({compCho})
    score = getScore(playerCho,compCho)
    //console.log({score})
    totalScore['playerCho'] += score
    //console.log(totalScore['playerCho'])
    
    statementView(score, playerCho, compCho)
}


function game() {
    const rpsbuttons = document.querySelectorAll(".rpsbutton")

    rpsbuttons.forEach(rpsbutton => {
        rpsbutton.onclick = () => onclickF(rpsbutton.value)
    })
}

//statement()

game()
