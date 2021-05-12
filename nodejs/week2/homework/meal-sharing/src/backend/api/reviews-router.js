//Respond with the json for all reviews.
//Respond with the json for the review with the corresponding id.
const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    response.send(reviews[id - 1]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
