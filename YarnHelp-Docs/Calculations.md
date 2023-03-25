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


## HOW THE NUMBER OF BALLS NEEDED IS CALCULATED - 

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
