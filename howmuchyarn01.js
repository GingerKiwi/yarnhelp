// Note: the comments are more detailed than what I would put in production code for a commerical product so that new devs can learn from this project.

// If you're a new dev - Welcome to the community and have lots of fun! 

// Connect with me on LinkedIn: https://www.linkedin.com/in/elizabethmccready/

// The numbers refer to yarn weights (thicknesses). Please see docs especially the Craft Yarn Council yarn standards guide for info.

let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

// Knitting Answers

let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')
let toddlerPulloverAnswer04 = document.getElementById('answer-pullover-toddler-04')
let childPulloverAnswer04 = document.getElementById('answer-pullover-child-04')
let womensPulloverAnswer04 = document.getElementById('answer-pullover-womens-04')
let mensPulloverAnswer04 = document.getElementById('answer-pullover-mens-04')

// Crochet Answers

let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')
let toddlerCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-toddler-04')
let childCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-child-04')
let womensCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-womens-04')
let mensCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-mens-04')


// --- 04 WORSTED WEIGHT (yarn thickness) CALCULATIONS --- //

// --- 04 Pullovers --- //

// 04 Knitting 

const babyPullover04 = Number(Math.ceil(550 * 1.05/yardsPerBall.value))
const toddlerPullover04 = Number(Math.ceil(800 * 1.05/yardsPerBall.value))
const childPullover04 = Number(Math.ceil(1200 * 1.05/yardsPerBall.value))

const womensPullover04 = Number(Math.ceil(1400 * 1.05/yardsPerBall.value))
const mensPullover04 = Number(Math.ceil(1700 * 1.05/yardsPerBall.value))

// 04 Crochet 
// Crochet takes approximately 25% more yarn than knitting. (* 1.25). An extra 3% has been added to 1.25 to make sure there is enouch yarn.

const babyCrochetPullover04 = Number(Math.ceil(550 * 1.28 * 1.05/yardsPerBall.value))
const toddlerCrochetPullover04 = Number(Math.ceil(800 * 1.28 * 1.05/yardsPerBall.value))
const childCrochetPullover04 = Number(Math.ceil(1200 * 1.28 * 1.05/yardsPerBall.value))

const womensCrochetPullover04 = Number(Math.ceil(1400 * 1.28 * 1.05/yardsPerBall.value))
const mensCrochetPullover04 = Number(Math.ceil(1700 * 1.28 * 1.05/yardsPerBall.value))


// Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.

babyPulloverAnswer04.innerHTML = `${babyPullover04} balls of this yarn are needed to knit a baby pullover`
babyCrochetPulloverAnswer04.innerHTML = `${babyCrochetPullover04} balls of this yarn are needed to crochet a baby pullover`

toddlerPulloverAnswer04.innerHTML = `${toddlerPullover04} balls of this yarn are needed to knit a toddler pullover`
toddlerCrochetPulloverAnswer04.innerHTML = `${btoddlerrochetPullover04} balls of this yarn are needed to crochet a toddler pullover`

childPulloverAnswer04.innerHTML = `${childPullover04} balls of this yarn are needed to knit a child pullover`
childCrochetPulloverAnswer04.innerHTML = `${childCrochetPullover04} balls of this yarn are needed to crochet a child pullover`

womensPulloverAnswer04.innerHTML = `${womensPullover04} balls of this yarn are needed to knit a womens pullover`
womensCrochetPulloverAnswer04.innerHTML = `${womensCrochetPullover04} balls of this yarn are needed to crochet a womens pullover`

mensPulloverAnswer04.innerHTML = `${mensPullover04} balls of this yarn are needed to knit a mens pullover`
mensCrochetPulloverAnswer04.innerHTML = `${mensCrochetPullover04} balls of this yarn are needed to crochet a mens pullover`

