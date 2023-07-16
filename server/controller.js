const db = [ 
    {
    ideaId:1,
    country: 'USA',
    city: 'Denver',
    season: 'fall'
}, 
{
    ideaId:2,
    country: 'Mexico',
    city: 'Monterrey',
    season: 'spring'
},
{
    ideaId:3,
    country: 'India',
    city: 'Jaipur',
    season: 'fall'
},
{
    ideaId:4,
    country: 'France',
    city: 'Lyon',
    season: 'winter'
},
{
    ideaId:5,
    country: 'Canada',
    city: 'Montreal',
    season: 'summer'
},

]

//ID Tracker
let ideaId = 6
//CRUD
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
//READ
    getFortune: (req,res) => {
        const fortune =["You will be rich really soon", "A new job is waiting for you", "The love of your life is close by", "Follow your instincts, the outcome will be great", "A major opportunity is waiting for you"]
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },
//CREATE
    addTravelIdeas:(req,res) => {
        const {country, city, season} = req.body
        const newObj = {
            ideaId,
            country,
            city,
            season
        };
        db.push(newObj)
        res.status(200).send(db)
        ideaId++
    },
//UPDATE
    updateTravelIdeas:(req,res) => {
        const {id} = req.params
        const {newCountryIdea, newCityIdea, newSeasonIdea} = req.body
        //Look for id to locate object
        const indexofIdea = db.findIndex(idea => idea.ideaId === +id)
        if(indexofIdea === -1) {
            res.status(400).send('Your travel idea was not found')
            return
        }
        //Reassingning the object
        db[indexofIdea].country = newCountryIdea
        db[indexofIdea].city = newCityIdea
        db[indexofIdea].season = newSeasonIdea
        res.status(200).send(db)

        },
//DELETE
    deleteTravelIdeas:(req,res) => {
        const {id} = req.params
        const indexofIdea = db.findIndex(idea => idea.ideaId === +id)
        if(indexofIdea === -1) {
            res.status(400).send('Your travel idea was not found')
            return
        }
        //Delete the object
        db.splice(indexofIdea,1)
        res.status(200).send(db)
    },
}
