// 1- Short Title Movies//
function getMoviesMaxTitleLength(movies, maxTitleLength) {
  return movies.filter((movie) => movie.title.length <= maxTitleLength);
}
let shortMovies = getMoviesMaxTitleLength(movies, 10);
console.log(shortMovies);

function displayMovies(movies, n, tagId) {
  let s = "";
  for (let i = 0; i < n; i++) {
    let s = s + moives[i] + "<br>";
  }
  document.getElementById(tagId).innerHTML = s;
}
displayMovies(movies, 16, "demo");

// 2 - Long Title Movies //
longTitleMovies();

function wordCountFunction() {
  movies.sort(function (a, b) {
    return b.title.length - a.title.length;
  });
  longTitleMovies();
}
console.log(movies);
function displayMovies(movies, n, tagId) {
  let s = "";
  for (let i = 0; i < n; i++) {
    let s = s + moives[i] + "<br>";
  }
  document.getElementById(tagId).innerHTML = s;
}
displayMovies(movies, 10, "demo2");
//  3- number of movies made between 1980-1989//
const moviesCount = movies.filter(
  (item) => item.year >= 1980 && item.year <= 1989
).length;
console.log(moviesCount);
function moviesCountFunction() {
  document.getElementById("demo3").innerHTML = moviesCount;
}

// 4 -New array that has an extra key called tag.
const newMovies = movies.filter((x) => x);
newMovies.map((item) => {
  if (item.rating >= 7) {
    item.tag = "Good";
  } else if (item.rating >= 4 && item.rating < 7) {
    item.tag = "Average";
  } else {
    item.tag = "Bad";
  }
});
console.log(newMovies);
// 5 -Using chaining, filter and map use.
const goodMovies = movies.filter((item) => item.rating > 6);
console.log(goodMovies);

const mapGoodMovies = goodMovies.map((item) => item.rating);
console.log(mapGoodMovies);

// 6 -Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
const searchWord1 = "Surfer".toLowerCase();
const searchWord2 = "Alien".toLowerCase();
const searchWord3 = "Benjamin".toLowerCase();

const numberCountWords = movies.filter((movie) => {
  const title = movie.title.toLowerCase();
  return (
    title.includes(searchWord1.toLowerCase()) ||
    title.includes(searchWord2.toLowerCase()) ||
    title.includes(searchWord3.toLowerCase())
  );
}).length;

console.log(numberCountWords);
function wordCountFunction() {
  document.getElementById("demo4").innerHTML = numberCountWords;
}
//7 - Create an array of movies where a word in the title is duplicated
const duplicateWordCount = movies.filter(
  (item) => item.title.match(/\b(\w+)\b.*?\b\1\b /gi) !== null
);
console.log(duplicateWordCount);
