//random racipes

const recipe = ["Carrot","cake", "chicken", "egg", "rice", "onion", "Potato", "Cream", "Apple", "Sandwich", "jam", "Tomato"];

function getRandomItem(arr) {
 const randomIndex = Math.floor(Math.random() * recipe.length);

 // get random item

 const item = recipe[randomIndex];

 return item;
}

const result = getRandomItem(recipe);

const random_recipe = async () => {
 let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`;

 const res = await fetch(url);

 const dta = await res.json();

 let html = "";

 if (dta.meals) {
  dta.meals.forEach((meal) => {
   html += `
  <div class="card" data-id = "${meal.idMeal}">

  <img src=${meal.strMealThumb} class="card_img" alt="image">

  <div class="card_container">
    <h5 class="card_title">${meal.strMeal}</h5>
    <a href=${meal.strSource} target="_blank" class="btn_recipe">Get Recipe</a>

  </div>

</div>
`;
  });
 } else {
  swal("Sorry", "We didn't find any meal!", "error");
 }

 category.innerHTML = html;
};

random_recipe();
