export function customizeNavBar(){
    let navElement:Element | null =  document.querySelector("#nav-bar");
    if(navElement != null){
        navElement.innerHTML = '<ul><li><a href="/index.html">Home</a></li><li><a href="/pages/optimizer.html">Optimizer</a></li></ul><form id="search-form" action="#"><input type="text" placeholder="Search for..."><button>Search</button></form>';
    }
}

export function setupSearchButton(){
    let searchButton:Element | null =  document.querySelector("#nav-bar #search-form button");
    if(searchButton != null){ 
        searchButton.addEventListener("click", startSearch);
    }
}

function startSearch(){
    
}