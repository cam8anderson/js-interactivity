console.log("hello world");

let message = document.querySelector("#message");

let addMovie = (eve) => {
  eve.preventDefault();

  const inputField = document.querySelector("input");

  let movie = document.createElement("li");

  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (event) => {
    deleteMovie(event);
  });
  movie.appendChild(deleteBtn);

  let ul = document.querySelector("ul");
  ul.appendChild(movie);

  inputField.value = "";
};

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  addMovie(event);
});

let deleteMovie = (eve) => {
  eve.target.parentNode.remove();

  message.textContent = `${
    eve.target.parentNode.querySelector("span").textContent
  } deleted!`;
  revealMessage();
};

let crossOffMovie = (eve) => {
  eve.target.classList.toggle("checked") === true;

  if (eve.target.classList.contains("checked")) {
    message.textContent = `${eve.target.textContent} watched!`;
  } else {
    message.textContent = `${eve.target.textContent} added back!`;
  }
  revealMessage();
};

let revealMessage = () => {
  message.classList.remove("hide");

  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
};
