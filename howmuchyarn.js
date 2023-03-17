let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

let babyAnswer = document.getElementById('answer-baby')
let toddlerAnswer = document.getElementById('answer-toddler')
let childAnswer = document.getElementById('answer-child')
let adult1Answer = document.getElementById('answer-adult-1')
let adult2Answer = document.getElementById('answer-adult-2')



calculateBtn.addEventListener("click", function() {

    
    // Babies and Children //
    babyAnswer.innerHTML = 
        `You Need ${Number(Math.ceil(550 * 1.05/yardsPerBall.value))} Balls of Yarn`
    toddlerAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(800 * 1.05/yardsPerBall.value))} Balls of Yarn`
    childAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(1200 * 1.05/yardsPerBall.value))} Balls of Yarn`
    
    // Adults //
    adult1Answer.innerHTML = 
    `You Need ${Number(Math.ceil(1400 * 1.05/yardsPerBall.value))} Balls of Yarn`
    // Baby Function //
    adult2Answer.innerHTML = 
    `You Need ${Number(Math.ceil(1700* 1.05/yardsPerBall.value))} Balls of Yarn`
    
})

// -- HOW THE NUMBER OF BALLS NEEDED IS CALCULATED - SWEATERS/JUMPERS: -- //
// The number of balls needed is calculated using the "max yardage" in 
// https://www.interweave.com/article/knitting/how-much-yarn-do-i-need/" 
// adding a 5% buffer ( * 1.05) and rounding up to the whole ball/skein (Math.ceil)
// because yarn is sold by the ball/skein and not fraction)
// Max Yardage for Pullover Sweater/Jumper
// Baby: 550yards | Toddler: 800 yards | Child: 1200 yards | 
// Adult small/medium or Women's: 1400 yards | Adult large/extra large or Mens's: 1700 yards