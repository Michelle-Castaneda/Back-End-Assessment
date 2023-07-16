const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment,getFortune, addTravelIdeas, updateTravelIdeas, deleteTravelIdeas } = require('./controller')


//Endpoints
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/travelideas", addTravelIdeas);
app.put("/api/travelideas/:id", updateTravelIdeas);
app.delete("/api/travelideas/:id", deleteTravelIdeas);

app.listen(4000, () => console.log("Server running on 4000"));
