let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#modal-container");
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
   function getAll() {
     return pokemonList;
   }

   //change these to jquery
   function addListItem(pokemon) {

    let list = $(".pokemon-list");
    let listItem = $("<li></li>");
    let button = $("<button>" + pokemon.name + "</button>");
    //button.innerText = pokemon.name;
    button.addClass("btn btn-info");
    button.attr("data-toggle", "modal");
    button.attr("data-target", "#modal-container");
    listItem.append(button);
    list.append(listItem);
    button.on("click", function (event) {
      showDetails(pokemon);
    });
  }
 //load pokemon api
 function loadList() {
   return fetch(apiURL)
     .then(function (response) {
       return response.json();
     })
     .then(function (json) {
       json.results.forEach(function (item) {
         let pokemon = {
           name: item.name,
           detailsUrl: item.url,
         };
         add(pokemon);
         console.log(pokemon);
       });
     })
     .catch(function (e) {
       console.error(e);
     });
 }
 //isolate and fetch the item details to display
 function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url)
     .then(function (response) {
       return response.json();
     })
     .then(function (details) {
       //add details to item
       item.imageUrl = details.sprites.front_default;
       item.height = details.height;
       item.types = details.types;
     })
     .catch(function (e) {
       console.error(e);
     });
  }

  function showDetails(pokemon) {  
  
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //console.log(item);
  /*
      modalContainer.innerHTML = "";
      let modal = document.createElement("div");
      modal.classList.add("modal");
     //create close button
     let closeButton = document.createElement("button");
     closeButton.classList.add("modal-close");
     closeButton.innerText = "Close";
     closeButton.addEventListener("click", hideModal);
     //create title element
     let titleElement = document.createElement("h1");
     titleElement.innerText = pokemon.name;
     //create content element
     let contentElement = document.createElement("p");
     contentElement.innerText = "height: " + pokemon.height;
     //create image element
     let pokemonImg = document.createElement("img");
     pokemonImg.src = pokemon.imageUrl;
     modal.appendChild(closeButton);
     modal.appendChild(titleElement);
     modal.appendChild(contentElement);
     modal.appendChild(pokemonImg);
      modalContainer.appendChild(modal);

      modalContainer.classList.add("is-visible");

    });

    function hideModal() {
     modalContainer.classList.remove("is-visible");
   }
   window.addEventListener("keydown", (e) => {
     if (
       e.key === "Escape" &&
       modalContainer.classList.contains("is-visible")
     ) {
       hideModal();
     }
   });
   modalContainer.addEventListener("click", (e) => {
     let target = e.target;
     if (target === modalContainer) {
       hideModal();
      }
    });
  }
*/
  //create showModal function
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
    //clear existing content in modal
    modalTitle.empty();
    modalBody.empty();

    //create element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    //height element
    let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");
    //type element
    let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");
    //create img element in content
    let imgElement = $("<img class='modal-img' style='width:50%'>");
    imgElement.attr("src", pokemon.imageURL);

    //add elements to parent containers
    modalTitle.append(nameElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(imgElement);
  }
  return {
    add: add,
    getAll: getAll,  
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();
//print list with item details with forEach function
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


 
 



    
  
  