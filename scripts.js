let guessNum = document.querySelector("#guessNum")
let yes = document.querySelector("#yes")
let no = document.querySelector("#no")
let yesNoBtn = document.querySelector("#yesNoBtn")
let restartGame = document.querySelector("#restartGame")
let inputValue = document.querySelector("#inputValue")
let form = document.querySelector("#form")

let correctNumber = Math.floor(Math.random() * (11 - 1)) + 1
let chancesNumber = 3
let show = false
let guessShow = false


yes.addEventListener("click", playGame)
no.addEventListener("click", noInput)
form.addEventListener("submit", formCal)

document.querySelector("#restartYesBtn").addEventListener("click", playGame)
document.querySelector("#restartNoBtn").addEventListener("click", noInput)



document.addEventListener("DOMContentLoaded", play)

function guessResult(guess, correctNumber) {
    if (guess > correctNumber) {

        let h5 = document.createElement("p")
        h5.className = "text-center guessHide m-0"
        h5.appendChild(document.createTextNode(`Guess Number is To high`))
        document.querySelector(".showRemaining").appendChild(h5)
    } else {

        let h5 = document.createElement("p")
        h5.className = "text-center guessHide m-0"
        h5.appendChild(document.createTextNode(`Guess Number is To low`))
        document.querySelector(".showRemaining").appendChild(h5)
    }
    if (guessShow) {
        document.querySelector(".guessHide").remove()
    }
    guessShow = true
}

function playGame(e) {

    yesNoBtn.style.display = "none";
    guessNum.style.display = "block";
    restartGame.style.display = "none";

    let h6 = document.createElement("h6")
    h6.className = "text-center show1To10"
    h6.appendChild(document.createTextNode("Guess Number  between 1 to 10"))
    document.querySelector(".showRemaining").appendChild(h6)

    let p = document.createElement("p")
    p.className = "text-center firstShow"
    p.appendChild(document.createTextNode("You have 3 chance to guess the number"))
    document.querySelector(".showRemaining").appendChild(p)


    // form.addEventListener("submit", e => {
    //     if (show) {
    //         document.querySelector(".showH5").remove()
    //     } else {
    //         document.querySelector(".firstShow").remove()
    //     }

    //     show = true
    //     chancesNumber -= 1
    //     if (chancesNumber == 0) {
    //         document.querySelector(".show1To10").remove()

    //         show = false
    //         chancesNumber = 3
    //         guessNum.style.display = "none";
    //         restartGame.style.display = "block";
    //         yesNoBtn.style.display = "none";

    //     } else {

    //         let h5 = document.createElement("p")
    //         h5.className = "text-center showH5"
    //         h5.appendChild(document.createTextNode(`The number of chances remaining is ${chancesNumber}`))
    //         document.querySelector(".showRemaining").appendChild(h5)
    //     }

    //     console.log(chancesNumber)

    //     // console.log(correctNumber)


    //     inputValue.value = ""
    //     e.preventDefault();
    // })


}

// Guess game manage
function formCal(e) {
    if (show) {
        document.querySelector(".showH5").remove()

    } else {
        document.querySelector(".firstShow").remove()
    }

    show = true
    chancesNumber -= 1



    if (Number(inputValue.value) === correctNumber) {
        document.querySelector(".flex-column").innerHTML = `
        <h2> You Have Win The Game </h2>
        `

        return
    }

    guessResult(Number(inputValue.value), correctNumber)

    if (chancesNumber == 0) {
        document.querySelector(".show1To10").remove()
        document.querySelector(".guessHide").remove()

        show = false
        guessShow = false
        chancesNumber = 3
        correctNumber = Math.floor(Math.random() * (11 - 1)) + 1
        guessNum.style.display = "none";
        restartGame.style.display = "block";
        yesNoBtn.style.display = "none";

    } else {

        let h5 = document.createElement("p")
        h5.className = "text-center showH5"
        h5.appendChild(document.createTextNode(`The number of chances remaining is ${chancesNumber}`))
        document.querySelector(".showRemaining").appendChild(h5)
    }

    // console.log(chancesNumber)

    console.log(correctNumber)


    inputValue.value = ""
    e.preventDefault();
}


function noInput(e) {
    yesNoBtn.style.display = "none";
    guessNum.style.display = "none";
    restartGame.style.display = "none";

    document.querySelector(".flex-column").innerHTML = "<h2>If you want to play with this game please refresh this page </h2>"
}


function play(e) {
    guessNum.style.display = "none";
    restartGame.style.display = "none";
}