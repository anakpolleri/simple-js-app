let pokemonRepository = (function() {
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
  }
];
// for loop //
let pokemonListNames = ['Charmandor', 'Jigglypuff', 'Slowbro'];

for (let i = 0; i < pokemonListNames.length; i++){
  console.log(pokemonListNames[i]);
}


function add(pokemon) {
pokemonList.push(pokemon);
}
function getAll() {
  return pokemonList;
}
return {
  add: add,
  getAll: getAll,
};
})();
pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + "- type: " + pokemon.type + "-" + " (height " + pokemon.height + ")" + "<br>");
});
