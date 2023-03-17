let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

let babyPulloverAnswer = document.getElementById('answer-pullover-baby')
let toddlerPulloverAnswer = document.getElementById('answer-pullover-toddler')
let childPulloverAnswer = document.getElementById('answer-pullover-child')
let adult1PulloverAnswer = document.getElementById('answer-pullover-adult01')
let adult2PulloverAnswer = document.getElementById('answer-pullover-adult02')


// -- NOTE: Need to refactor to use variables for each calculation

calculateBtn.addEventListener("click", function() {

   // --- PULLOVER SWEATERS ---

    // Babies and Children //
    babyPulloverAnswer.innerHTML = 
        `You Need ${Number(Math.ceil(550 * 1.05/yardsPerBall.value))} balls of yarn for a baby pullover`
    toddlerPulloverAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(800 * 1.05/yardsPerBall.value))} balls of yarn for a toddler pullover`
    childPulloverAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(1200 * 1.05/yardsPerBall.value))} balls of yarn for a child`
    
    // Adults //
    adult1PulloverAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(1400 * 1.05/yardsPerBall.value))} balls of yarn for a women's pullover`
    adult2PulloverAnswer.innerHTML = 
    `You Need ${Number(Math.ceil(1700* 1.05/yardsPerBall.value))} balls of yarn for a men's pullover`
    
    // --- BLANKETS AND THROWS

    // -- ACCESSORIES
})

// -- HOW THE NUMBER OF BALLS NEEDED IS CALCULATED - SWEATERS/JUMPERS: -- //
// The number of balls needed is calculated using the "max yardage" in 
// https://www.interweave.com/article/knitting/how-much-yarn-do-i-need/" 
// adding a 5% buffer ( * 1.05) and rounding up to the whole ball/skein (Math.ceil)
// because yarn is sold by the ball/skein and not fraction)
// Max Yardage for Pullover Sweater/Jumper
// Baby: 550yards | Toddler: 800 yards | Child: 1200 yards | 
// Adult small/medium or Women's: 1400 yards | Adult large/extra large or Mens's: 1700 yards