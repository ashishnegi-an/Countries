// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => response.json())
//   .then(data => console.log(data))
var cards = [];
var filteredCount = [];
var filteredReg = []
var oneCount = [];


var app = new function() {
    this.el = document.getElementById("container");
    
    //  onsearch change => on country change => filtered countries(array)
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
          cards = data;
          filteredCount = cards;
          filteredReg = cards;
          this.FetchAll();
        });
    
    
    

    this.FetchAll = function () {
        var pulp = '';

        if (filteredCount) {
            for (let i=0; i<filteredCount.length; i++){
                pulp += '<div class="card" style="width: 18rem;">'
                pulp += '<a href="details.html?code='+filteredCount[i].alpha3Code+'"><img src="'+filteredCount[i].flag+'" class="card-img-top" alt="..."></img></a>'
                pulp += '<div class="card-body"><h3>'+filteredCount[i].name+'</h3>'
                pulp += '<p class="card-text">Population:'+filteredCount[i].population+'</p>'
                pulp += '<p class="card-text">Region:'+filteredCount[i].region+'</p>'
                pulp += '<p class="card-text">Capital:'+filteredCount[i].capital+'</p>'
                pulp += '</div></div>'
            }
        }
        else {
            pulp += '<h3>Oops, No countries match your search</h3>'
        }
        return this.el.innerHTML = pulp;
    };


}

onSearchChange = (val) => {
    filteredCount = filteredReg.filter(el => {
        return el.name.toLowerCase().includes(val.toLowerCase());
    });
    app.FetchAll();
}

onSelectRegion = (val) => {
    filteredReg = cards.filter(el => {
        return el.region.toLowerCase().includes(val.toLowerCase());
    });
    onSearchChange('');
    // app.FetchAll();
}

dark = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// renderOne = function () {
//     this.el = document.getElementById("container-detail");
//     var pulp = '';
//     pulp += '<div><img src="'+oneCount.flag+'" alt="..."></img></div>'
    
//     return this.el.innerHTML = pulp;
// }

// fetchOne = (val) => {
//     oneCount = cards.filter(el => {
//         return el.alpha3Code.toLowerCase().includes(val.toLowerCase());
//     });
//     console.log(oneCount);
//     renderOne();
// }