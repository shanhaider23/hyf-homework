const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  let filteredMeals = meals;

  try {
    if ("maxPrice" in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        return response
          .status(400)
          .send({ error: "Maximum Price must be integer" });
      }
      filteredMeals = filteredMeals.filter((meal) => meal.price <= maxPrice);
    }

    if ("title" in request.query) {
      const title = request.query.title;
      filteredMeals = filteredMeals.filter((meal) => {
        return meal.title.includes(`${title}`);
      });
    }

    if ("createdAfter" in request.query) {
      const createdAfter = new Date(request.query.createdAfter);
      if (!createdAfter.getDate()) {
        response.status(400).send("must be a valid date.");
        return;
      }
      filteredMeals = filteredMeals.filter(
        (meal) => new Date(meal.createdAt) > createdAfter
      );
    }

    if ("limit" in request.query) {
      const limit = parseInt(request.query.limit);

      if (isNaN(limit)) {
        return response.status(400).send("Limit should be an integer");
      }

      filteredMeals.length = limit;
    }

    response.json(filteredMeals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  if (isNaN(id)) {
    return response.status(400).json({ error: "id must be an integer" });
  } else {
    response.json(meals.filter(meal => meal.id === id));
  }
});

module.exports = router;
