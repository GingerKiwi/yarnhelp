let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

const yardsPerBallValue = Number.parseInt(yardsPerBall.value);

// =========================//
// ---      SCARFS ---      //
// ========================= //

// Knitting Answers

// let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')


// Crochet Answers

//let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')

// --- 04 WORSTED WEIGHT (yarn thickness) CALCULATIONS --- //

// --- 04 Scarfs --- //
// SCARF YARDAGE REQUIREMENTS
// child 250
// adultSmall 409
// adultLarge 534
// adultExtra 667
// doctorWho 1260

// 04 Knitting 

const childScarf04 = Number(Math.ceil(250 * 1.05/yardsPerBallValue))
const adultSmallScarf04 = Number(Math.ceil(409 * 1.05/yardsPerBallValue))
const adultLargeScarf04 = Number(Math.ceil(534 * 1.05/yardsPerBallValue))
const adultExtraScarf04 = Number(Math.ceil(667 * 1.05/yardsPerBallValue))
const doctorWhoScarf04 = Number(Math.ceil(1260 * 1.05/yardsPerBallValue))

// 04 Crochet 
// Crochet takes approximately 25% more yarn than knitting. (* 1.25). An extra 3% has been added to 1.25 to make sure there is enouch yarn.

// const babyCrochetPullover04 = Number(Math.ceil(550 * 1.28 * 1.05/yardsPerBallValue))

// Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.

// babyPulloverAnswer04.innerHTML = `${babyPullover04} balls of this yarn are needed to knit a baby pullover`
// babyCrochetPulloverAnswer04.innerHTML = `${babyCrochetPullover04} balls of this yarn are needed to crochet a baby pullover`

