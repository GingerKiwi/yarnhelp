// Note: the comments are more detailed than what I would put in production code for a commerical product so that new devs can learn from this project.

// If you're a new dev - Welcome to the community and have lots of fun! 

// Connect with me on LinkedIn: https://www.linkedin.com/in/elizabethmccready/

// The numbers refer to yarn weights (thicknesses). Please see docs especially the Craft Yarn Council yarn standards guide for info.

let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

// Knitting Answers

let babyPulloverAnswer = document.getElementById('answer-pullover-baby')
let toddlerPulloverAnswer = document.getElementById('answer-pullover-toddler')
let childPulloverAnswer = document.getElementById('answer-pullover-child')
let womensPulloverAnswer = document.getElementById('answer-pullover-adult01')
let mensPulloverAnswer = document.getElementById('answer-pullover-adult02')

// Crochet Answers

let babyCrochetPulloverAnswer = document.getElementById('answer-crochet-pullover-baby')
let toddlerCrochetPulloverAnswer = document.getElementById('answer-crochet-pullover-toddler')
let childCrochetPulloverAnswer = document.getElementById('answer-crochet-pullover-child')
let womensCrochetPulloverAnswer = document.getElementById('answer-crochet-pullover-adult01')
let mensCrochetPulloverAnswer = document.getElementById('answer-crochet-pullover-adult02')


// --- 04 WORSTED WEIGHT (yarn thickness) CALCULATIONS --- //

// --- 04 Pullovers --- //

// 04 Knitting 

const babyPulloverW4 = Number(Math.ceil(550 * 1.05/yardsPerBall.value))
const toddlerPulloverW4 = Number(Math.ceil(800 * 1.05/yardsPerBall.value))
const childPulloverW4 = Number(Math.ceil(1200 * 1.05/yardsPerBall.value))

const womensPulloverW4 = Number(Math.ceil(1400 * 1.05/yardsPerBall.value))
const mensPulloverW4 = Number(Math.ceil(1700 * 1.05/yardsPerBall.value))

// 04 Crochet 
// Crochet takes approximately 25% more yarn than knitting. (* 1.25). An extra 3% has been added to 1.25 to make sure there is enouch yarn.

const babyCrochetPulloverW4 = Number(Math.ceil(550 * 1.28 * 1.05/yardsPerBall.value))
const toddlerCrochetPulloverW4 = Number(Math.ceil(800 * 1.28 * 1.05/yardsPerBall.value))
const childCrochetPulloverW4 = Number(Math.ceil(1200 * 1.28 * 1.05/yardsPerBall.value))

const womensCrochetPulloverW4 = Number(Math.ceil(1400 * 1.28 * 1.05/yardsPerBall.value))
const mensCrochetPulloverW4 = Number(Math.ceil(1700 * 1.28 * 1.05/yardsPerBall.value))


// Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.

babyPulloverAnswer.innerHTML = `${babyPulloverW4} balls of this yarn are needed to knit a baby pullover`
babyCrochetPulloverAnswer.innerHTML = `${babyCrochetPulloverW4} balls of this yarn are needed to crochet a baby pullover`

toddlerPulloverAnswer.innerHTML = `${toddlerPulloverW4} balls of this yarn are needed to knit a toddler pullover`
toddlerCrochetPulloverAnswer.innerHTML = `${btoddlerrochetPulloverW4} balls of this yarn are needed to crochet a toddler pullover`

childPulloverAnswer.innerHTML = `${childPulloverW4} balls of this yarn are needed to knit a child pullover`
childCrochetPulloverAnswer.innerHTML = `${childCrochetPulloverW4} balls of this yarn are needed to crochet a child pullover`

womensPulloverAnswer.innerHTML = `${womensPulloverW4} balls of this yarn are needed to knit a womens pullover`
womensCrochetPulloverAnswer.innerHTML = `${womensCrochetPulloverW4} balls of this yarn are needed to crochet a womens pullover`

mensPulloverAnswer.innerHTML = `${mensPulloverW4} balls of this yarn are needed to knit a mens pullover`
mensCrochetPulloverAnswer.innerHTML = `${mensCrochetPulloverW4} balls of this yarn are needed to crochet a mens pullover`

