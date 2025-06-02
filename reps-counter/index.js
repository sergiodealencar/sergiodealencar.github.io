// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


let timerEl = document.getElementById("timer")
let timerInterval
let seconds = 0

function formatTime(s) {
    let mins = Math.floor(s / 60)
    let secs = s % 60
    return (
        (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs
    )
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(function () {
            seconds++
            timerEl.textContent = formatTime(seconds)
        }, 1000)
    }
}

function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null
}

function resetTimer() {
    stopTimer()
    seconds = 0
    timerEl.textContent = "00:00"
}