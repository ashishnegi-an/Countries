const params = new URLSearchParams(window.location.search);
var card = [];

let code = params.get("code");
// console.log(params.get("code"));

fetch('https://restcountries.eu/rest/v2/alpha/' + code.toLocaleLowerCase())
    .then(response => response.json())
    .then(data => {
        card = data;
        Render();
        console.log(card);
    });

Render = () => {
    let pulp = '';
    pulp += '<img src="'+card.flag+'" alt="..."></img>'
    document.getElementById("flag").innerHTML = pulp;

    pulp = '<h1>'+card.name+'</h1>'
    document.getElementById("name").innerHTML = pulp;

    pulp = '<p>Native Name: '+card.nativeName+'</p>'
    pulp += '<p>Top Level Domain: '+card.topLevelDomain[0]+'</p>'
    pulp += '<p>Population: '+card.population+'</p>'
    pulp += '<p>Currencies: '+card.currencies[0].name+'</p>'
    pulp += '<p>Region: '+card.region+'</p>'
    pulp += '<p>Language: '+card.languages[0].name
    for(let i=1; i<card.languages.length; i++) {
        pulp += ', ' + card.languages[i].name
    }
    pulp += '</p>'
    pulp += '<p>Sub Region: '+card.subregion+'</p>'
    pulp += '<p>  </p>'
    pulp += '<p>Capital: '+card.capital+'</p>'

    document.getElementById("about").innerHTML = pulp;

    pulp = '<p>Border Countries: </p>'
    for(let i=0; i<card.borders.length; i++) {
        pulp += '<a href="details.html?code='+card.borders[i]+'"><button>'+card.borders[i]+'</button></a>'
    }
    
    document.getElementById("border").innerHTML = pulp;



};



dark = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}