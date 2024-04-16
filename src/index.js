function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let informationInput = document.querySelector("#information");
  let apiKey = "b0fa3t4066ff24b4o954e79ca4875fa1";
  let context =
    "You are a well diverse cook who loves to try out short and simple recipes from African countries. Your mission is to generate a simple recipe in basic HTML. Make sure to follow user instructions below. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning.";
  let prompt = `User instructions: Generate a African food recipe about ${informationInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">⏳Generating a recipe from ${informationInput.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
