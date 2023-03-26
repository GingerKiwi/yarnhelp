let yardsPerBall = document.getElementById('yards-per-ball')
let calculateBtn = document.getElementById("btn-calculate")

let DoctorWhoScarfAnswer04 = document.getElementById('answer-doctorwho-scarf-04')
let DoctorWhoScarfCrochetAnswer04 = document.getElementById('answer-doctorwho-crochet-scarf-04')

const yardsPerBallValue = Number.parseInt(yardsPerBall.value);

const doctorWhoScarf04 = (Math.ceil(1260 * 1.05/yardsPerBallValue))
const doctorWhoCrochetScarf04 = (Math.ceil(1260 * 1.28 * 1.05/yardsPerBallValue))

DoctorWhoScarfAnswer04.innerHTML = `${doctorWhoScarf04} balls of this yarn are needed to knit a 12 foot long Doctor Who scarf.`
DoctorWhoScarfCrochetAnswer04.innerHTML = `${doctorWhoCrochetScarf04} balls of this yarn are needed to crochet a 12 foot long Doctor Who scarf.`
