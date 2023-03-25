*Note: This changelog includes both technical changes as well as the more personal process of, and reflections and influences on developing this app. Though the latter isn't typical of a commerical project, I've included it in this personal project to help others who are learning to build out their own personal projects.*

## 2.0 (2023.03.18 | March 18, 2023)

### Work on Docs and Calculations
- Figured out that for **just the sweater calculations the app will need to do 200 calculations** for knit and crochet cardigans in 5 weights of yarn, for 6 sizes including oversized/long, cabled, and cabled cardigans.
	- Is it better to pull some of this data (eg total yardage per each project type/size) from a JSON doc?

- -> Goal is to do the calculations as variables outside of the string literals. The calculations are currently done inside the .innerHTML = statements like below:

```js
babyPulloverAnswer.innerHTML =

`You need ${Number(Math.ceil(550 * 1.05/yardsPerBall.value))} balls of this yarn for a baby pullover`
```

Instead something like this:
```js
// Worsted Weight (Craft Yarn Council yarn weight 4) for Baby Pullover:
const babyPulloverW4 = Number(Math.ceil(550 * 1.05/yardsPerBall.value))

babyPulloverAnswer.innerHTML = `${babyPulloverW4} balls of this yarn are needed for a baby pullover`
```

- Add PDF-References Folder to YarnHelp-Docs Folder
	- 2 webpages saved as pdf
		- Interweave Knits - sweater calculations
		- Twisted Yarn Shop - inc crochet, blankets/throws, scarfs, shawls, and accessories
	- Craft Yarn Council's Yarn Standards docs
- Add Calculations.md
	- Start list of yarn requirements for different weights of pullovers and cardigans
	- Start list of yarn requirements for blankets and throws
	- Add example of calculation in js code block

## 2.0 (2023.03.17 | March 17, 2023)

### Deploy to https://yarnhelp.app 

- Change domain name servers on Netlify to yarnhelp.app
- Deploy 1.0 site on https:yarnhelp.app
- Change [GitHub Repo](https://github.com/GingerKiwi/yarnhelp) name to yarnhelp
- Clone GitHub repo locally
- Create YarnHelp-Docs folder with CHANGELOG.md
- Create Obsidain vault for project to manage and compose markdown files
- Start actually using this changelog

## Start 2.0 Version

- Create Dev-2023.03 branch
- Create Yarnhelp1.0 branch (so I can easily show orginal version with live server by switching branches with/out rolling back)
- Rename orginal project files to:
	- index01.html
	- styles01.html
	- app01.html
- Create version 2.0 files for multipage site:
	- index.html
	- howmuchyarn.html
	- styles.css
	- howmuchyarn.css
	- howmuchyarn.js 
	- about.html
	- To show version 1.0 (building in public) include the following pages:
		- index01.html -> for version 1.0
			- Added link back to index.hmtl of ver 2.0
		- styles01.html
		- app01.js - > for version 1.0 

## 1.0.0 (2023.03.14 | March 14, 2023)

- Complete Scrimba's UI Design Course - which I partially started to upskill for yarnhelp.app
- Complete first half of Wes Bos' command line course. Realize how awesome the updates to my zsh and using iTerm2 are. 
- This is the push to finally get back to dev'ing yarnhelp.


## 1.0.0 (2023.01.00 | January, 2023)

### PWA Plans Start

- While skating on the Bentway Skate Trail have conversation with friend and senior dev Marco about technicalities of developing YarnHelp as a PWA.


## 1.0.0 (2022.10.05 | October 05, 2022)
Register yarnhelp.app on Google Domains

(Aside Note: also registered alicegame.app on the same day.)

## 1.0.0 (2022.09.22 | September 22, 2022)

Use metric convertor project design to create and deploy yarn-git-helper on Netlify at [yarngifthelper-gingerkiwi.netlify.app](https://yarngifthelper-gingerkiwi.netlify.app)

## 0.0.1 (2022-03-00 | March, 2022)

Create inital project in codepen from code along with Brad Traversy
See the [codepen collection](https://codepen.io/collection/WvMqQp)