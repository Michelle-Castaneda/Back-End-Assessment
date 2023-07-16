//GET COMPLIMENT
const displaySection = document.querySelector("#display-section");
const complimentBtn = document.getElementById("complimentButton")
const newIdeasID = document.getElementById("newIdeasID")
const newCountryIdeas = document.getElementById("newCountryIdeas")
const newCityIdeas = document.getElementById("newCityIdeas")
const newSeasonIdeas = document.getElementById("newSeasonIdeas")
const addForm = document.querySelector("#add-idea");
const updateForm = document.querySelector('#update-idea')
//UPDATE
const ideaId = document.getElementById('updateIdeasID')
const updateCountry = document.getElementById('updateCountryIdeas')
const updateCity = document.getElementById('updateCityIdeas')
const updateSeason = document.getElementById('updateSeasonIdeas')
//const newIdeasButton = document.getElementById('newIdeasButton')
//const updateIdeasButton = document.getElementById('updateIdeasButton')




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//Display Section 

createIdeasDisplay = (db) => {
    displaySection.innerHTML = ``
    db.map((ideas) => {
        const holdingDiv = document.createElement('div');
        holdingDiv.innerHTML = `
        <ul>
                <li>ideaId: ${ideas.ideaId}</li>
                <li>country: ${ideas.country}</li>
                <li>city: ${ideas.city}</li>
                <li>season: ${ideas.season}</li>
                <button onclick="deleteIdea(${ideas.ideaId})"> Delete </button>
        </ul>
        `;
    displaySection.appendChild(holdingDiv)   
    })
}

//GET FORTUNE
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
            createIdeasDisplay(res.data)
    });
};

fortuneBtn.addEventListener('click', getFortune)


//DELETE IDEA
const deleteIdea = (id) => {
    axios
      .delete(`http://localhost:4000/api/travelideas/${id}`)
      .then((res) => createIdeasDisplay(res.data))
      .catch((err) => console.error(err));
}
//ADD NEW IDEA
//Will take the information from the textbox and send it to the back end (post request)
const addNewIdea = (event) => {
    event.preventDefault(); //to avoid it to refresh and lose the information
    const body = {
        //ideaId: ideaId.value,
        country: newCountryIdeas.value,
        city: newCityIdeas.value,
        season: newSeasonIdeas.value
    };
    axios
    .post("http://localhost:4000/api/travelideas/",body)
    .then((res) => createIdeasDisplay(res.data))
    .catch((err) => console.error(err));
    newCountryIdeas.value=``;
    newCityIdeas.value=``
    newSeasonIdeas.value=``
};



//UPDATE IDEA
const updateHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/api/travelideas/${ideaId.value}`, {
    newCountryIdea: updateCountry.value,
    newCityIdea: updateCity.value,
    newSeasonIdea: updateSeason.value,
})
    .then(res => createIdeasDisplay(res.data))
    .catch(err => console.error(err))
};








addForm.addEventListener("submit", addNewIdea);
updateForm.addEventListener("submit", updateHandler)
//document.addEventListener('DOMContentLoaded', getFortune )