const searchForm = document.getElementById("search_form");
const searchInput = document.getElementById("search_input");
const resultsEl = document.getElementById("results");
const searchNumber = document.getElementById("search_number");

searchNumber.addEventListener("submit", () => {});
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const q = searchInput.value;
  search(q);
});
function search(q) {
  const apikey = "5qPpsdB2ilYI2P0NkHnTMivVq7qot9TT";
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=${searchNumber.value}`;
  fetch(path)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      console.log(json.data[0].images.fixed_width.url);
      let resultsHTML = "";
      json.data
        .forEach(function (obj) {
          const url = obj.images.fixed_width.url;
          const width = obj.images.fixed_width.width;
          const height = obj.images.fixed_width.height;
          const title = obj.title;

          resultsHTML += `<img src="${url}"
                                 width="${width}" height="${height}" alt="${title}">`;
          resultsEl.innerHTML = resultsHTML;
        })
        .catch((err) => alert("Invalid input"));
    });
}
