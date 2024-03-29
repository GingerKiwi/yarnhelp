let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

const yardsPerBallValue = Number.parseInt(yardsPerBall.value);

// =========================//
// ---      SCARFS ---      //
// ========================= //

// Knitting Answers

// let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')
let ChildScarfAnswer04 = document.getElementById('answer-child-scarf-04')
let AdultSmallScarfAnswer04 = document.getElementById('answer-adult-small-scarf-04')
let AdultLargeScarfAnswer04 = document.getElementById('answer-adult-large-scarf-answer-04')
let AdultExtraScarfAnswer04 = document.getElementById('answer-adult-extra-scarf-answer-04')
let DoctorWhoScarfAnswer04 = document.getElementById('answer-doctorwho-scarf-answer-04')


// Crochet Answers

//let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')
let ChildCrochetScarfAnswer04 = document.getElementById('answer-child-crochet-scarf-04')
let AdultCrochetSmallScarfAnswer04 = document.getElementById('answer-adult-small-crochet-scarf-04')
let AdultCrochetLargeScarfAnswer04 = document.getElementById('answer-adult-large-crochet-scarf-04')
let AdultCrochetExtraScarfAnswer04 = document.getElementById('answer-adult-extra-crochet-scarf-answer-04')
let DoctorWhoScarfCrochetAnswer04 = document.getElementById('answer-doctorwho-crochet-scarf-04')

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

const childCrochetScarf04 = Number(Math.ceil(250 * 1.28 * 1.05/yardsPerBallValue))
const adultCrochetSmallScarf04 = Number(Math.ceil(409 * 1.28 * 1.05/yardsPerBallValue))
const adultCrochetLargeScarf04 = Number(Math.ceil(534 * 1.28 * 1.05/yardsPerBallValue))
const adultCrochetExtraScarf04 = Number(Math.ceil(667 * 1.28 * 1.05/yardsPerBallValue))
const doctorWhoCrochetScarf04 = Number(Math.ceil(1260 * 1.28 * 1.05/yardsPerBallValue))

// Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.

// babyPulloverAnswer04.innerHTML = `${babyPullover04} balls of this yarn are needed to knit a baby pullover`
// babyCrochetPulloverAnswer04.innerHTML = `${babyCrochetPullover04} balls of this yarn are needed to crochet a baby pullover`

ChildScarfAnswer04.innerHTML = `${childScarf04} balls of this yarn are needed to knit a child scarf`
ChildCrochetScarfAnswer04.innerHTML = `${childCrochetScarf04} balls of this yarn are needed to crochet a child scarf`

AdultLargeScarfAnswer04.innerHTML = `${adultSmallScarf04} balls of this yarn are needed to knit a small or medium adult scarf`
AdultCrochetSmallScarfAnswer04.innerHTML = `${adultCrochetSmallScarf04} balls of this yarn are needed to crochet a  scarf`

AdultLargeScarfAnswer04.innerHTML = `${adultLargeScarf04} balls of this yarn are needed to knit a large or extra large adult scarf`
AdultCrochetLargeScarfAnswer04.innerHTML = `${adultCrochetLargeScarf04} balls of this yarn are needed to crochet a large or extra large adult scarf`

adultExtraScarf04.innerHTML = `${adultExtraScarf04} balls of this yarn are needed to knit an extra long adult scarf`
adultCrochetExtraScarf04.innerHTML = `${adultCrochetExtraScarf04} balls of this yarn are needed to crochet an extra long adult scarf`

DoctorWhoScarfAnswer04.innerHTML = `${doctorWhoScarf04} balls of this yarn are needed to knit a child scarf`
DoctorWhoScarfCrochetAnswer04.innerHTML = `${doctorWhoCrochetScarf04} balls of this yarn are needed to crochet a child scarf`
