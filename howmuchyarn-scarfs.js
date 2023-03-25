let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

const yardsPerBallValue = Number.parseInt(yardsPerBall.value);

// =========================//
// ---      SCARFS ---      //
// ========================= //

// Knitting Answers

// let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')
letChildScarfAnswer04 = document.getElementById('answer-child-scarf-04')
letAdultSmallScarfAnswer04 = document.getElementById('answer-adult-small-scarf-04')
letAdultLargeScarfAnswer04 = document.getElementById('answer-adult-large-scarf-answer-04')
letAdultExtraScarfAnswer04 = document.getElementById('answer-adult-extra-scarf-answer-04')
letDoctorWhoScarfAnswer04 = document.getElementById('answer-doctorwho-scarf-answer-04')


// Crochet Answers

//let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')
letChildCrochetScarfAnswer04 = document.getElementById('answer-child-crochet-scarf-04')
letAdultCrochetSmallScarfAnswer04 = document.getElementById('answer-adult-small-crochet-scarf-04')
letAdultCrochetLargeScarfAnswer04 = document.getElementById('answer-adult-large-crochet-scarf-04')
letAdultCrochetExtraScarfAnswer04 = document.getElementById('answer-adult-extra-crochet-scarf-answer-04')
letDoctorWhoScarfCrochetAnswer04 = document.getElementById('answer-doctorwho-crochet-scarf-04')

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


