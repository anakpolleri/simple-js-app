  let pokemonList = [
    {
      name: "Charmandor",
     height: 2.00,
     type: ['fire'],
   },
   {
     name: "Jigglypuff",
     height: 1.08,
     type: ['normal','fairy'],
   },
   {
     name: "Slowbro",
     height: 5.03,
      type: ['water','psychic'],
    },
  ];

  let pokemonRepository = (function () {
    let list = [];

   function add(pokemon) {
     list.push(pokemon);
   }  
  
  // created button
  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list"); // class from index.html
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class") // class for style.css 
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener("click", function(event){ // allows you to click on pokemon
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) { // will show pokemon detail in console
    console.log(pokemon.name + " " + pokemon.type);
  }

  function getAll() {
  return list; 
  }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
    };
  })();
// add external pokemonList to IIFE pokemonRepository
pokemonList.forEach(function (pokemon) {
  pokemonRepository.add(pokemon);
});

// create new variable and assign value of pokemonRepository
let allPokemon = pokemonRepository.getAll();

// display list
console.log("my initial pokemon list: ", allPokemon);

// create new pokemon item
let newPokemon = {
  name: "Kirlia",
  height: 2.07,
  type: ["psychic", "fairy"],
};
//add new pokemon to list
pokemonRepository.add(newPokemon);

console.log("my new pokemon list: ", allPokemon);
//print list with item details with forEach function
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

