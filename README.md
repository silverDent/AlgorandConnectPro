# AlgoconnectPro Dapp
Decentralise community of job seekers and providers (Algoconnectpro) on Algorand network.

# Inspiration

We were inspired by a challenge of helping companies to connect to the right talent they are looking for and making hiring process more transparent and community driven by modifying primitive hiring methods.

### In this project Present working:

Users can do login transaction into the network. Companies can post jobs as smart contracts. Users can refer other job seekers by bidding certain ammount against them(bidding amount per user has a cap  so that people don't randomly refer and the person refered most is tested first by company ). If the user is selected then the bounty amount will be distributed among  everyone helped him hire by refering (at present) , verifying(yet to include) him and other hiring stages can be included in future.


## Instructions To Run Code

* Node.js must be installed in your system.
* After cloning the project 
* use `$ npm install package.json` to install dependencies
* You need a copy of reach to get the devnet running. If you don't have one already
* `$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach`
* After that running `$ REACH_CONNECTOR_MODE=ALGO ./reach devnet` (which runs the ALGORAND devnet inside the terminal)
* go to the parent directory and start the React app `$ cd .. ; npm run start` 
* This will run the web-app in the localhost:3000


## Presentation links
* [video presentation:](https://www.youtube.com/watch?v=ECAwDtmf7ak)

### Why Blockchain?

* Can prevent tampering or inaccuracy of data provided by job seekers to avoid middle costs to third party agencies(companies connecting directly to the job seekers in a more democratic and free manner)
* Traceability A small group of spammers won't last long and will not have any impact. 
* Openness Anyone can view the User Profile , companys job posting and users experience, etc.
* Resume sorting will be done automatically by the community(bidding , verification will help this ) and community will be rewarded for that too so, win-win situation for all.

## Built With

* Node.js 
* Algorand 
* Reach
* React

### Plans for future

* Use Algorand smart contracts to support features like: 
* verification of user profile and experience.
* including other hiring processes too in the system to make hiring more robost and democratic.
