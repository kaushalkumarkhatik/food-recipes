const btn = document.getElementById("search_btn");

const srch = document.getElementById("srch");

const con = document.getElementById("con");

const category = document.getElementById("category");

const mealList = async () => {
 const serch_text = srch.value.trim();

 let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serch_text}`;

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

 con.innerHTML = html;
};

btn.addEventListener("click", mealList);
