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

  // for loop
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >1 && pokemonList[i].height <2) {
      document.write(pokemonList[i].name + " type: " + pokemonList[i].type + " " + " (height " + pokemonList[i].height +")" + " - they are the smallest" + "<br>" );
    } else {
      document.write(pokemonList[i].name + " type: " + pokemonList[i].type + " " + " (height " + pokemonList[i].height +")" + " <br> ");
    }
  }
  
  // for each loop
  function myPokeList(pokemon) {
    console.log(pokemon.name + " has a height of: " + pokemon.height + " and type of: " + pokemon.type);
  }

  function getAll() {
  return list; 
  }
    return {
      add: add,
      myPokeList: myPokeList,
      getAll: getAll,
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
  pokemonRepository.myPokeList(pokemon);
});

