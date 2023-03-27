## Yarn Weights (Thicknesses)

Craft Yarn Council (CYC)

- 0: lace
- 1: sock/fingering
- 2: sport
- 3: Dk/light worsted
- 4: Worsted/medium/aran
- 5: bulky/chunky
- 6: super chunky/super bulky
- 7: jumbo


## SWEATERS: HOW THE NUMBER OF BALLS NEEDED IS CALCULATED

### Example: Pullovers - Worsted Weight (CYC #4)

The number of balls needed is calculated using the "max yardage" in
https://www.interweave.com/article/knitting/how-much-yarn-do-i-need/"
adding a 5% buffer ( * 1.05) and rounding up to the whole ball/skein (Math.ceil)
because yarn is sold by the ball/skein and not fraction) 

Max Yardage for Pullover Sweater/Jumper:
- Baby: 550yards 
- Toddler: 800 yards
- Child: 1200 yards
- Adult small/medium or Women's: 1400 yards
- Adult large/extra large or Mens's: 1700 yards

## Pullovers

```js
// Example of calculation for Baby Pullovers:
Number(Math.ceil(550 * 1.05/yardsPerBall.value))
```

-> Goal is to do the calculations as variables outside of the string literals. 
The calculations are currently done inside the .innerHTML = statements like below:

```js
babyPulloverAnswer.innerHTML =

`You need ${Number(Math.ceil(550 * 1.05/yardsPerBall.value))} balls of this yarn for a baby pullover`
```

Instead something like this is much better code:
```js
// Worsted Weight (Craft Yarn Council yarn weight 4) for Baby Pullover:
const babyPulloverW4 = Number(Math.ceil(550 * 1.05/yardsPerBall.value))

babyPulloverAnswer.innerHTML = `${babyPulloverW4} balls of this yarn are needed for a baby pullover`

// Logic/pseudocode, using radio buttons for users to choose yarn weight would be:
if radiobuttonSelected === W4, then print answer for babyPulloverW4 in string literal for babyPulloverAnswer.innerHTML =
```

### How Many Calculations Are Needed for Knit and Crochet Sweaters?

**Need to Have Yardage for the most common 5 Yarn Weights for sweaters from 1 (fingering/sock) to 5 (chunky)**

With five weights for 6 different general sizes of knit pullovers, plus the same for crochet (crochet takes 25% more yarn for the same project) there are 60 (5 weights x 6 sizes x 2 (crochet+knitting) ) different calculations just for pullover sweaters.

When additional calculations for cardigans, cabled pullovers, and cabled cardigans are added:
cardigans - both knit and crochet = add 60 to total
cabled pullovers = add 30 to total
cabled cardigans = add 30 to total

Then oversized/loose knit/longer of the two main adult sizes
5 weights x 2 sizes x 2 (both knit and crochet) = 20

> **60 + 60 + 30 + 30 + 20 =
> 200 different calculations for knit and crochet pullovers and cardigans**

### Pullover and Sweater Yardages Required and Calculations

**Babies 12-18 Months**  
(for a pullover or cardigan)  
Fingering weight: 600-700 yards (550-650 meters)  
Sportweight: 550-650 yards (500-600 meters)  
Worsted weight: 450-550 (400-500 meters

```js
const babyPulloverW2 = Number(Math.ceil(700 * 1.05/yardsPerBall.value))
const babyPulloverW4 = Number(Math.ceil(650 * 1.05/yardsPerBall.value))
const babyPulloverW5 = Number(Math.ceil(550 * 1.05/yardsPerBall.value))
```

**Toddlers 2-6 Years**  
(for a pullover or cardigan)  
Sportweight: 800-1000 yards (750-950 meters)  
Worsted weight: 600-800 yards (550-750 meters)  
Bulky weight: 550-650 yards (500-600 meters)

**Children 6-12 Years**  
(for a pullover or cardigan)  
Sportweight: 1000-1500 yards (950-1400 meters)  
Worsted weight: 900-1200 yards (850-1100 meters)  
Bulky weight: 700-1000 yards (650-950 meters)

**Misses Sizes 32-40 Bust**  
(for a regular, comfortable-ease pullover; add 5% for a cardigan)  
Fingering weight: 1500-1700 yards (1400-1600 meters)  
Sportweight: 1400-1600 yards (1300-1500 meters)  
Worsted weight: 1100-1400 yards (1000-1300 meters)  
Bulky weight: 1000-1300 yards (950-1200 meters)

**For a longer, loosely fitting, or oversized misses-sized pullover (add 5% for a cardigan)**  
Sportweight: 1500-1900 yards (1400-1750 meters)  
Worsted weight: 1300-1500 yards (1200-1400 meters)  
Bulky weight: 1100-1400 yards (1000-1300 meters)

**Men sizes 36-48 Chest**  
(for a regular, comfortable-ease pullover (add 5% for a cardigan)  
Sportweight: 1700-2100 yards (1600-1950 meters)  
Worsted weight: 1500-1700 yards (1400-1600 meters)  
Bulky weight: 1300-1500 yards (1200-1400 meters)

**For a longer, loosely fitting, or oversized man’s pullover (add 5% for a cardigan)**  
Sportweight: 2000-2400 yards (1850-2200 meters)  
Worsted weight: 1500-1700 yards (1650-1850 meters)  
Bulky weight: 1300-1500 yards (1400-1550 meters)

—Vicki Square, from _The Knitter’s Companion_

Vicki doesn’t cover plus-size sweaters **(42-52 bust)**, but from my experience, you need the following amounts for, adding the same 5% for cardigans:  
Sportweight: 1600-2000 yards (1500-1850 meters)  
Worsted weight: 1400-1600 yards (1300-1500 meters)  
Bulky weight: 1200-1400 yards (1100-1300 meters)


## SCARFS: HOW THE NUMBER OF BALLS NEEDED IS CALCULATED

### Scarf Sizes

[Desert Blossom Crafts: How Long and Wide Should a Scarf Be?](https://desertblossomcrafts.com/scarf-length-and-width)

For the inital release I'm using the following sizes.
Eventually I would like to do a calculator for knitters and crocheters that starts with the required garmet size for square/rectangular projects then generates the yardage requirements and a pattern.

1) Child: 5" x 60"
(child in code)

2) Adult small/medium: 7" x 70"
(adultSmall - in code)

3) Adult lg/xl:  8" x 80"
(adultLarge in code)

4) Adult Extra Long: 8" x 100"
(adultLong in code)

5) Doctor Who 10.5" x 144" (12 feet)
(doctorWho in code)

The comments code block below is from howmuchyarn01.js on Sat March 25, 2023
Worsted weight (04) gauge is 16 to 20 stiches per four inches (CYC). We are using 5 stiches / inch (5st/in) as the gauge for the yarn yardage calculations

```js
// =====================================//

// --- BLANKETS, SHAWLS, and SCARFS --- //

// ==================================== //
  
// Start of Really Over the Top Excessively Detailed Comments
// -> so non-knitters can understand the code!
  
// --- Formula Knitted Blankets, Square Shawls, and Scarfs--- //
  
// Units: length and width are in inches, gauge is in stitches per inch
// Formula: (length x width x gauge) / 6 = yards needed
// note: dividing by 6 is to convert the answer from square inches to yards
// Then put yardsRequired into our base yarns neededd calculation:
// (Math.ceil(yardsRequired * 1.05/yardsPerBallValue))
// ** yardsRequired will eventually be in a JSON file.
  

// --> Example of Calculation -- //
  

// For a scarf 48" long and 8" wide using worsted weight (04) yarn, using Wool of the Andes superwash by Knit Picks* that has 110 yards per ball with the typical gauge for worsted of 5 stiches/inch. (48 X 8 x 5)/6 = 320 yards required (yardsRequired).
// * https://www.ravelry.com/yarns/library/knit-picks-wool-of-the-andes-superwash
//
// Then put yardsRequired into our base yarns needed calculation:
// (Math.ceil(320 * 1.05/110))
// = (Math.ceil(3.054...)
// = 4 balls
// For non or new knitters, rounding up when there's "just" a small amount (0.054) over 3 balls may seem excessive - but that last 5.45 yards is the difference between finishing the project and playing "yarn chicken" and/or not being able to finish. Left over yarn is always good. Not enough yarn isn't.
```

```js
1) Child: 5" x 60"
(child in code)

( 5 * 60 * 5 )/6 = 250

2) Adult small/medium: 7" x 70"
(adultSmall in code)

( 7 * 70 * 5 )/6 = 408.333.. //Use 409

3) Adult lg/xl:  8" x 80"
(adultLarge in code)

( 8 * 80 * 5 )/6 = 533.33 // Use 534

4) Adult Extra Long: 8" x 100"
(adultExtra in code)

( 8 * 100 * 5 )/6 = 666.666... // Use 667

5) Doctor Who 10.5" x 144" (12 feet)
(doctorWho in code)

( 10.5 * 114 * 5 )/6 = 1260

// SCARF YARDAGE REQUIREMENTS
// child 250
// adultSmall 409
// adultLarge 534
// adultExtra 667
// doctorWho 1260

```

## From Comments in howmuchyarn01.js March 25-27, 2023

  

// =====================================//

// --- BLANKETS, SHAWLS, and SCARFS --- //

// ==================================== //

  

// Start of Really Over the Top Excessively Detailed Comments

// -> so non-knitters can understand the code!

  

// --- Formula Knitted Blankets, Square Shawls, and Scarfs--- //

  

// Units: length and width are in inches, gauge is in stitches per inch

// Formula: (length x width x gauge) / 6 = yards needed

// note: dividing by 6 is to convert the answer from square inches to yards

// Then put yardsRequired into our base yarns neededd calculation:

// (Math.ceil(yardsRequired * 1.05/yardsPerBallValue))

// ** yardsRequired will eventually be in a JSON file.

  

// --> Example of Calculation -- //

  

// For a scarf 48" long and 8" wide using worsted weight (04) yarn, using Wool of the Andes superwash by Knit Picks* that has 110 yards per ball with the typical gauge for worsted of 5 stiches/inch. (48 X 8 x 5)/6 = 320 yards required (yardsRequired).

// * https://www.ravelry.com/yarns/library/knit-picks-wool-of-the-andes-superwash

//

// Then put yardsRequired into our base yarns needed calculation:

// (Math.ceil(320 * 1.05/110))

// = (Math.ceil(3.054...)

// = 4 balls

// For non or new knitters, rounding up when there's "just" a small amount (0.054) over 3 balls may seem excessive - but that last 5.45 yards is the difference between finishing the project and playing "yarn chicken" and/or not being able to finish. Left over yarn is always good. Not enough yarn isn't.

  
  

// =========================//

// --- SCARFS --- //

// ========================= //
// Knitting Answers

  

// let babyPulloverAnswer04 = document.getElementById('answer-pullover-baby-04')

  
  
  

// Crochet Answers

  

// Crochet takes approximately 25% more yarn than knitting. (* 1.25). An extra 3% has been added to 1.25 to make sure there is enouch yarn.

  

//let babyCrochetPulloverAnswer04 = document.getElementById('answer-crochet-pullover-baby-04')

  
  

// --- 04 WORSTED WEIGHT (yarn thickness) CALCULATIONS --- //
// --- 04 Scarfs --- //

// SCARF YARDAGE REQUIREMENTS -> See Calculations.md in the /Docs folder for more info

// child 250

// adultSmall 409

// adultLarge 534

// adultExtra 667

// doctorWho 1260

  
  
  

// 04 Crochet

// Crochet takes approximately 25% more yarn than knitting. (* 1.25). An extra 3% has been added to 1.25 to make sure there is enouch yarn.

  

// const babyCrochetPullover04 = Number(Math.ceil(550 * 1.28 * 1.05/yardsPerBallValue))
// Use the consts above in Calculations to print answer statements to the <p> inside each categories answer.

  

// babyPulloverAnswer04.innerHTML = `${babyPullover04} balls of this yarn are needed to knit a baby pullover`

// babyCrochetPulloverAnswer04.innerHTML = `${babyCrochetPullover04} balls of this yarn are needed to crochet a baby pullover`

```js

```

```js

let AdultExtraScarfAnswer04 = document.getElementById('answer-adult-extra-scarf-04')

const adultExtraScarf04 = Number(Math.ceil(667 * 1.05/yardsPerBallValue))

adultExtraScarf04.innerHTML = `${adultExtraScarf04} balls of this yarn are needed to knit an extra long adult scarf`


let AdultCrochetExtraScarfAnswer04 = document.getElementById('answer-adult-extra-crochet-scarf-04')

const adultCrochetExtraScarf04 = Number(Math.ceil(667 * 1.28 * 1.05/yardsPerBallValue))

adultCrochetExtraScarf04.innerHTML = `${adultCrochetExtraScarf04} balls of this yarn are needed to crochet an extra long adult scarf`
```


( 5 * 60 * 5 )/6 = 250

## BLANKETS: HOW THE NUMBER OF BALLS NEEDED IS CALCULATED

