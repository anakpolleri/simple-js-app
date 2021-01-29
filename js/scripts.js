let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContianer = document.querySelector("#modal-container");
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
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
        .then(function (details) { //add details to item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        })
        .catch(function (e) {
          console.error(e);
         });
     }
     function showDetails(item) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        //console.log(item);
        modalContianer.innerHTML = "";
        let modal = document.createElement("div");
        modal.classList.add("modal");

        // create close button
        let closeButton = document.createElement("button");
        closeButton.classList.add("modal-close");
        closeButton.innerText = "Close";
        closeButton.addEventListener("click, hideModal");

        // create title element
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
 
 



    
  
  