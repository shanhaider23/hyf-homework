//1-movies
const moviesApi =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
fetch(moviesApi)
  .then((response) => response.json())
  .then((data) => {
    const badMovies = data.filter((movie) => movie.rating < 5);
    const badMovies2000 = badMovies
      .filter((movie) => movie.year >= 2000)
      .map((movie) => movie.title);
    console.log(badMovies);
    console.log(badMovies2000);
  })
  .catch((err) => console.log(err.message));
//2-Promise that resolves after set time
function resolveTimeout(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 3000);
  });
}
resolveTimeout(8).then(() => {
  console.log("I am called asynchronously.");
});

async function resolveTimeout2(resolveAfter) {
  const timer = await setTimeout(() => {
    console.log("I am called asynchronously (async/await).");
  }, resolveAfter * 3000);
  return timer;
}
resolveTimeout2(5);
//3-rewrite timer
function setTimeoutPromise(resolvedAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolvedAfter);
  });
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

getCurrentLocation()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });
//4-Fetching and waiting
const basePromise = new Promise((resolve) => {
  setTimeout(() => {
    const jokeApi = fetch("https://v2.jokeapi.dev/joke/Programming");
    resolve(jokeApi);
  }, 3000);
}).catch((err) => console.log(err.message));
basePromise
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });

//Using asyng/await
async function jokeApi() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const baseUrl = await fetch("https://v2.jokeapi.dev/joke/Programming");
  const data = await baseUrl.json();
  console.log(data);
}
jokeApi();
