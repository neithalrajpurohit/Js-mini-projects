let id = document.querySelector("#joke");
let btn = document.querySelector("#jokeBtn");

const getJoke = async () => {
  let store = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await store.json();
  //   console.log(data.setup);
  return data.setup;
};

btn.addEventListener("click", async () => {
  btn.textContent = "loading";
  let store = await getJoke();
  console.log(store);
  id.textContent = store;
  btn.textContent = "Get Another Joke";
});
