const ghost = document.getElementById("ghost")
const words = document.getElementById("words")
const schedule = document.getElementById("schedule")
const drops = document.getElementsByClassName("drop")

ghost.addEventListener("mouseover", wordsAppear)
ghost.addEventListener("mouseout", wordsFade)
schedule.addEventListener("mouseover", makeItRain)
schedule.addEventListener("touchstart", makeItRain, false)

function wordsAppear() {
    words.style.opacity = "0.6"
}

function wordsFade() {
    setTimeout(function () {
        words.style.opacity = "0"
    },
        10000);
}

function makeItRain() {
    for (let i = 0; i < drops.length; i++) {
        drops[i].classList.add("rain")
    }
}