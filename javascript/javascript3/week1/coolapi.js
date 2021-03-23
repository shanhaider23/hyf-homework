/*JokeAPI is a REST API that serves uniformly and well formatted jokes.
It can be used without any API token, membership, registration or payment.
it is array with objects and string.
It supports a variety of filters that can be applied to get just the right jokes you need.
The usage is very simple and similar to other RESTful APIs and requires only basic knowledge of HTTP requests and JSON, XML, YAML or plain text.*/

const jokeApi = "https://v2.jokeapi.dev/joke/Programming";
fetch(jokeApi)
  .then((response) => response.json())
  .then((data) => console.log(data));
