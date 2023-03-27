// Note: the comments are more detailed than what I would put in production code for a commerical product so that new devs can learn from this project.
// Please see Calculations.md in the Docs folder on GitHub as well as the other .md and .pdf files to understand all things yarn and the calculations.
// The numbers refer to yarn weights (thicknesses). Please see docs especially the Craft Yarn Council yarn standards guide for info.

// If you're a new dev - Welcome to the community and have lots of fun! 
// Connect with me on LinkedIn: https://www.linkedin.com/in/elizabethmccready/

let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

// =================//
// --- SWEATERS --- //
// =================//

// Knitting

let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')
let toddlerPulloverAnswer04 = document.getElementById('answer-pullover-toddler-04')
let childPulloverAnswer04 = document.getElementById('answer-pullover-child-04')
let womensPulloverAnswer04 = document.getElementById('answer-pullover-womens-04')
let mensPulloverAnswer04 = document.getElementById('answer-pullover-mens-04')

// Crochet

let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')
let toddlerCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-toddler-04')
let childCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-child-04')
let womensCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-womens-04')
let mensCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-mens-04')

// ===============//
// --- SCARFS --- //
// ===============//

// Knitting

let ChildScarfAnswer04 = document.getElementById('answer-child-scarf-04')
let AdultSmallScarfAnswer04 = document.getElementById('answer-adult-small-scarf-04')
let AdultLargeScarfAnswer04 = document.getElementById('answer-adult-large-scarf-04')
let AdultExtraScarfAnswer04 = document.getElementById('answer-adult-extra-scarf-04')
let DoctorWhoScarfAnswer04 = document.getElementById('answer-doctorwho-scarf-04')

// Crochet 

let ChildCrochetScarfAnswer04 = document.getElementById('answer-child-crochet-scarf-04')
let AdultCrochetSmallScarfAnswer04 = document.getElementById('answer-adult-small-crochet-scarf-04')
let AdultCrochetLargeScarfAnswer04 = document.getElementById('answer-adult-large-crochet-scarf-04')
let AdultCrochetExtraScarfAnswer04 = document.getElementById('answer-adult-extra-crochet-scarf-04')
let DoctorWhoScarfCrochetAnswer04 = document.getElementById('answer-doctorwho-crochet-scarf-04')

// --- Make it all work! --- //

calculateBtn.addEventListener("click", function() {
    // Convert Input From User From String to Number
    const yardsPerBallValue = Number.parseInt(yardsPerBall.value)
    // --- 04 WORSTED WEIGHT (yarn thickness) CALCULATIONS --- //
    // --- 04 Pullovers --- //

    // 04 Knitting 
    const babyPullover04 = Number(Math.ceil(550 * 1.05/yardsPerBallValue))
    const toddlerPullover04 = Number(Math.ceil(800 * 1.05/yardsPerBallValue))
    const childPullover04 = Number(Math.ceil(1200 * 1.05/yardsPerBallValue))
    const womensPullover04 = Number(Math.ceil(1400 * 1.05/yardsPerBallValue))
    const mensPullover04 = Number(Math.ceil(1700 * 1.05/yardsPerBallValue))

    // 04 Crochet 
    const babyCrochetPullover04 = Number(Math.ceil(550 * 1.28 * 1.05/yardsPerBallValue))
    const toddlerCrochetPullover04 = Number(Math.ceil(800 * 1.28 * 1.05/yardsPerBallValue))
    const childCrochetPullover04 = Number(Math.ceil(1200 * 1.28 * 1.05/yardsPerBallValue))
    const womensCrochetPullover04 = Number(Math.ceil(1400 * 1.28 * 1.05/yardsPerBallValue))
    const mensCrochetPullover04 = Number(Math.ceil(1700 * 1.28 * 1.05/yardsPerBallValue))

    // -- 04 Scarfs -- //
    
    // 04 Knitting 
    const childScarf04 = Number(Math.ceil(250 * 1.05/yardsPerBallValue))
    const adultSmallScarf04 = Number(Math.ceil(409 * 1.05/yardsPerBallValue))
    const adultLargeScarf04 = Number(Math.ceil(534 * 1.05/yardsPerBallValue))
    const adultExtraScarf04 = Number(Math.ceil(667 * 1.05/yardsPerBallValue))
    const doctorWhoScarf04 = Number(Math.ceil(1260 * 1.05/yardsPerBallValue))

    // 04 Crochet
    const childCrochetScarf04 = Number(Math.ceil(250 * 1.28 * 1.05/yardsPerBallValue))
    const adultCrochetSmallScarf04 = Number(Math.ceil(409 * 1.28 * 1.05/yardsPerBallValue))
    const adultCrochetLargeScarf04 = Number(Math.ceil(534 * 1.28 * 1.05/yardsPerBallValue))
    const adultCrochetExtraScarf04 = Number(Math.ceil(667 * 1.28 * 1.05/yardsPerBallValue))
    const doctorWhoCrochetScarf04 = Number(Math.ceil(1260 * 1.28 * 1.05/yardsPerBallValue))

    // -- Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.
    
    // 04 Pullover Answers
    babyPulloverAnswer04.innerHTML = `${babyPullover04} balls of this yarn are needed to knit a baby pullover`
    babyCrochetPulloverAnswer04.innerHTML = `${babyCrochetPullover04} balls of this yarn are needed to crochet a baby pullover`

    toddlerPulloverAnswer04.innerHTML = `${toddlerPullover04} balls of this yarn are needed to knit a toddler pullover`
    toddlerCrochetPulloverAnswer04.innerHTML = `${toddlerCrochetPullover04} balls of this yarn are needed to crochet a toddler pullover`

    childPulloverAnswer04.innerHTML = `${childPullover04} balls of this yarn are needed to knit a child pullover`
    childCrochetPulloverAnswer04.innerHTML = `${childCrochetPullover04} balls of this yarn are needed to crochet a child pullover`

    womensPulloverAnswer04.innerHTML = `${womensPullover04} balls of this yarn are needed to knit a womens pullover`
    womensCrochetPulloverAnswer04.innerHTML = `${womensCrochetPullover04} balls of this yarn are needed to crochet a womens pullover`

    mensPulloverAnswer04.innerHTML = `${mensPullover04} balls of this yarn are needed to knit a mens pullover`
    mensCrochetPulloverAnswer04.innerHTML = `${mensCrochetPullover04} balls of this yarn are needed to crochet a mens pullover`

    // 04 Scarfs

    ChildScarfAnswer04.innerHTML = `${childScarf04} balls of this yarn are needed to knit a child scarf`
    ChildCrochetScarfAnswer04.innerHTML = `${childCrochetScarf04} balls of this yarn are needed to crochet a child scarf`

    AdultSmallScarfAnswer04.innerHTML = `${adultSmallScarf04} balls of this yarn are needed to knit a small or medium adult scarf`
    AdultCrochetSmallScarfAnswer04.innerHTML = `${adultCrochetSmallScarf04} balls of this yarn are needed to crochet a  scarf`

    AdultLargeScarfAnswer04.innerHTML = `${adultLargeScarf04} balls of this yarn are needed to knit a large or extra large adult scarf`
    AdultCrochetLargeScarfAnswer04.innerHTML = `${adultCrochetLargeScarf04} balls of this yarn are needed to crochet a large or extra large adult scarf`

    adultExtraScarf04.innerHTML = `${adultExtraScarf04} balls of this yarn are needed to knit an extra long adult scarf`
    adultCrochetExtraScarf04.innerHTML = `${adultCrochetExtraScarf04} balls of this yarn are needed to crochet an extra long adult scarf`

    DoctorWhoScarfAnswer04.innerHTML = `${doctorWhoScarf04} balls of this yarn are needed to knit a 12 foot long Doctor Who scarf`
    DoctorWhoScarfCrochetAnswer04.innerHTML = `${doctorWhoCrochetScarf04} balls of this yarn are needed to crochet a 12 foot long Doctor Who scarf`
}) // New Devs: Dont' forget the last ) ! Nothing works if you forget it.
