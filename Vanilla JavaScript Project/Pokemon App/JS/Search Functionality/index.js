import {
  containerPokeCard,
  prevBtn,
  nextBtn,
  loader,
  pagination,
  footer,
  backBtn,
  evolutionHeading,
  searchBtn,
  inputField,
} from "../Constants Variables/index.js";
import { fetchingStarts, fetchingEnds } from "../During Fetching/index.js";
import { count } from "../Pagination/index.js";
import { evolution, knowMore } from "../Evolution & Know More/index.js";
console.log(searchBtn, inputField);

searchBtn.addEventListener("click", () => {
  if (inputField.value) {
    const inputValue = inputField.value.toLowerCase();
    console.log(inputValue);
    function getInfo() {
      fetchingStarts();
      const pokeName = inputValue;
      containerPokeCard.innerHTML = "";
      backBtn.style.display = "block";
      pagination.style.display = "none";

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const stats = data.stats;
          console.log(stats);
          containerPokeCard.innerHTML = `<h3 id = "pokenameKnowMore"  class = "animation2" >${
            data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()
          }</h3>`;
          containerPokeCard.innerHTML += `
                <div id = "pokemonInfo" class = "animation2">
                <button class="button-32" role="button"> Height : ${data.height} meters</button>
                <button class="button-32" role="button">Weight : ${data.weight} kgs</button>
                <button class="button-32" role="button">Type : ${data.types[0].type.name}</button>
                </div>
                <div class = "knowMore class = "animation2""> 
                <div id = "box-left">
                <img class = "animation2" src="${data.sprites.other.dream_world.front_default}" alt="pokemon"/>
                </div>
                <div class = "stats">
                
      <div class = "progressBox class = "animation2"">
      
      </div>`;
          const progressBox = document.getElementsByClassName("progressBox")[0];
          stats.forEach((stat, index) => {
            console.log(stat.base_stat);
            console.log(stat.stat.name);
            progressBox.innerHTML += `
                  <div class ="box animation2">
                  <div  style="margin-bottom: 6px;"><b id = "statsText" >${stat.stat.name.toUpperCase()}</b></div>
                  <div class="progress">
                    <div class="bar" style = "width : ${
                      stat.base_stat * 3
                    }px; background-color: #fd${index}${index}4${index}">${
              stat.base_stat
            }
                  </div>
                  </div>
                  </div
                  `;
          });
        })
        .catch((error) => {

            containerPokeCard.innerHTML = `<h2 class = "displayError"> OOPS! Some Error Occured!</h2>`;
        })
        .finally(() => {
          fetchingEnds();
          pagination.style.display = "none";
        });
    }
    getInfo();
  } else {
    alert("Please enter some value!");
  }
});
