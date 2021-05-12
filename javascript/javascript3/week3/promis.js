async function getUsers(userName) {
  let url = ` https://api.github.com/search/repositories?q=user:${userName}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

console.log(getUsers("benna100"));
const userDisplay = document.getElementById("container");
const promiseAll = Promise.all([
  getUsers("seenachacko"),
  getUsers("Gohar33"),
  getUsers("slaviaF"),
]);
promiseAll.then((data) => console.log(data));
promiseAll.then((data) => {
  data.forEach((user) => {
    console.log(user.items[0].owner.login);
    const fullNameRepo = user.items[0].full_name;
    const urlRepo = user.items[0].html_url;
    const ownerName = user.items[0].owner.login;
    function display(x){
      console.log(x)
    }
    display(fullNameRepo);
    display(urlRepo);
    display(ownerName);
    
    const appendUl = document.createElement("ul");
    const appendLi = document.createElement("li");
    const childLi = document.createElement("li");

    container.appendChild(appendUl);
    container.appendChild(appendLi);
    container.appendChild(childLi);

    appendUl.innerText = ownerName;
    appendLi.innerText = fullNameRepo;
    childLi.innerText = urlRepo;
  });
});
