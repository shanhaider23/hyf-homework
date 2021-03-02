// 1- Short Title Movies//
displayMovies();

function showShortTitleMovies() {
  movies.sort(function(a, b){return a.title.length - b.title.length});
  displayMovies();
}
console.log(movies);
function displayMovies() {
  document.getElementById("demo").innerHTML =
  movies[0].title + " : " + movies[0].year + "<br>" +
  movies[1].title + " : " + movies[1].year + "<br>" +
  movies[2].title + " : " + movies[2].year + "<br>" +
  movies[3].title + " : " + movies[3].year + "<br>" +
  movies[4].title + " : " + movies[4].year + "<br>" +
  movies[5].title + " : " + movies[5].year + "<br>" +
  movies[6].title + " : " + movies[6].year + "<br>" +
  movies[7].title + " : " + movies[7].year + "<br>" +
  movies[8].title + " : " + movies[8].year + "<br>" +
  movies[9].title + " : " + movies[9].year + "<br>" +
  movies[10].title + " : " + movies[10].year + "<br>" +
  movies[11].title + " : " + movies[11].year + "<br>" +
  movies[12].title + " : " + movies[12].year + "<br>" +
  movies[13].title + " : " + movies[13].year + "<br>" +
  movies[14].title + " : " + movies[14].year + "<br>" +
  movies[15].title + " : " + movies[15].year + "<br>" +
  movies[16].title + " : " + movies[16].year;
}
// 2 - Long Title Movies //
longTitleMovies();

function secondFunction() {
  movies.sort(function(a, b){return b.title.length - a.title.length});
  longTitleMovies();
}
console.log(movies);
function longTitleMovies() {
  document.getElementById("demo2").innerHTML =
  movies[0].title + " : " + movies[0].year + "<br>" +
  movies[1].title + " : " + movies[1].year + "<br>" +
  movies[2].title + " : " + movies[2].year + "<br>" +
  movies[3].title + " : " + movies[3].year + "<br>" +
  movies[4].title + " : " + movies[4].year + "<br>" +
  movies[5].title + " : " + movies[5].year + "<br>" +
  movies[6].title + " : " + movies[6].year + "<br>" +
  movies[7].title + " : " + movies[7].year + "<br>" +
  movies[8].title + " : " + movies[8].year + "<br>" +
  movies[9].title + " : " + movies[9].year + "<br>" +
  movies[10].title + " : " + movies[10].year + "<br>" +
  movies[11].title + " : " + movies[11].year + "<br>" +
  movies[12].title + " : " + movies[12].year + "<br>" +
  movies[13].title + " : " + movies[13].year + "<br>" +
  movies[14].title + " : " + movies[14].year + "<br>" +
  movies[15].title + " : " + movies[15].year + "<br>" +
  movies[16].title + " : " + movies[16].year;
};
//  3- number of movies made between 1980-1989//
const moviesCount = movies.filter(item => item.year >= 1980 && item.year<= 1989).length;
console.log(moviesCount);
function moviesCountFunction() {
    document.getElementById("demo3").innerHTML = moviesCount};
    
    // 4 -New array that has an extra key called tag.
    const newMovies = movies.filter(x => x)
    newMovies.map(item => {if (item.rating >= 7) {item.tag = "Good"
        } else if (item.rating >= 4 && item.rating < 7) {item.tag = "Average"
        } else {item.tag = "Bad"
        }
    }
    )
    console.log(newMovies);
// 5 -Using chaining, filter and map use.
 const goodMovies = movies.filter(item => item.rating > 6);
 console.log(goodMovies);

 const mapGoodMovies = goodMovies.map(item =>item);
 console.log(mapGoodMovies);
 
 // 6 -Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
const searchWord1 = "Surfer".toLowerCase();
const searchWord2 = "Alien".toLowerCase()
const searchWord3 = "Benjamin".toLowerCase()

const numberCountWords = movies 
      .filter((movie) => {
          const title = movie.title.toLowerCase();
          return title.includes(searchWord1.toLowerCase()) || 
                 title.includes(searchWord2.toLowerCase()) || 
                 title.includes(searchWord3.toLowerCase())
      })       
      .length;

console.log(numberCountWords);
function wordCountFunction() {
    document.getElementById("demo4").innerHTML = numberCountWords};
    //7 - Create an array of movies where a word in the title is duplicated
const duplicateWordCount = movies.filter(item => item.title.match(/\b(\w+)\b.*?\b\1\b /gi) !== null);
console.log(duplicateWordCount);
