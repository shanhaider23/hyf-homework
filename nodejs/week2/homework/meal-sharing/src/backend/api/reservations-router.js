//Respond with the json for all the reservations.
//Respond with the json for the meal with the corresponding id.
const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    response.send(reservations[id - 1]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
