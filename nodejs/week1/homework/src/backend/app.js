const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing App");
});
const getMealsReviews = () =>
  meals.map((meal) => {
    meal["reviews"] = reviews.filter((review) => meal.id == review.mealId);
    return meal;
  });
getMealsReviews();

app.get("/meals", (req, res) => {
  res.json(getMealsReviews());
});

app.get("/cheap-meals", (req, res) => {
  let cheapMeals = meals.filter((meal) => {
    return meal["price"] < 50;
  });
  res.json(cheapMeals);
});

app.get("/large-meals", (req, res) => {
  let largeMeals = meals.filter((meal) => {
    return meal["maxNumberOfGuests"] > 6;
  });
  res.json(largeMeals);
});

app.get("/meal", (req, res) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  res.json(randomMeal);
});

app.get("/reservations", (req, res) => res.json(reservations));

app.get("/reservation", (req, res) => {
  const randomReservation =
    reservations[Math.floor(Math.random() * reservations.length)];
  res.json(randomReservation);
});

module.exports = app;
