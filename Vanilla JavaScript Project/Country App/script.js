const btn = document.getElementById('btn');
const searchInput = document.getElementById('searchInput');
const card = document.getElementById('card');

console.log(btn , searchInput);
btn.addEventListener('click' , function(e){
    e.preventDefault();
    card.style.opacity = 0;

    if(searchInput.value){
        getCountry(searchInput.value)
    }
    else{
        alert('Enter some name')
    }
})

function getCountry(country){
const request = new XMLHttpRequest();
request.open('GET' ,`https://restcountries.com/v3.1/name/${country}`);
request.send();
request.onload = function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const flag = data.flags.png;

    const countryName = data.name.official;

    const capitals =  data.capital;
    let capitalList = "";
    capitals.forEach(capital => {
        capitalList += capital + ","
    });

    capitalList = capitalList.slice(0 , -2);

    const region = data.region;
    const population = data.population;

    const languages = data.languages;
    let langaugeList = "";
    for(let x in languages)
    {
        langaugeList += languages[x] + ','

    }
    langaugeList =langaugeList.slice(0, -2)

    const area = (data.area / 1000000).toFixed(1) + "Million sq.km"

    const currencyObj = data.currencies;
    let currency = "";
    for( let i in currencyObj){
        currency = currencyObj[1].name;
    }

    card.innerHTML= `<img src="${flag}"
    class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${countryName}</h5>
    
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Capital :<strong> ${capitalList} </strong></li>
    <li class="list-group-item">Region :<strong> ${region} </strong> </li>
    <li class="list-group-item">Population : <strong> ${population} </strong> </li>
    <li class="list-group-item">Languages : <strong> ${languageList} </strong></li>
    <li class="list-group-item">Area : <strong> ${area} </strong>  </li>
    <li class="list-group-item">Currency : <strong> ${currency} </strong>  </li>
    
</ul>
`
card.style.opacity = '1';

}
}