let pokemonRepository = (function () {
  let pokemonList = [
  {
  name: "Charmandor",
  height: 2.00,
  type: ['fire'],
  },
  {
  name: "Jigglypuff",
  height: 1.08,
  type: ['normal', 'fairy'],
  },
  {
  name: "Slowbro",
  height: 5.03,
  type: ['water', 'psychic'],
  },
  ];
  
  function add(pokemon) {
  pokemonList.push(pokemon);
  }
  
  function getAll() {
  return pokemonList;
  }
  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  };
  })();
  
  // create new pokemon item
  let newPokemon = {
  name: "Kirlia",
  height: 2.07,
  type: ["psychic", "fairy"],
  };

  //add new pokemon to list
  pokemonRepository.add(newPokemon);
  
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
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
    
  
  