let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input")
let result = document.getElementById("result");


searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    // console.log(countryName);
    let API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    // console.log(API_URL);

    fetch(API_URL)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <img src = "${data[0].flags.svg}" class = "flag-img"/>
                <h2>${data[0].name.common}</h2>
                <div className="container">
                    <div class= "data-container">
                        <h4>Başkent:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Kıta:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Nüfus:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Para Birimi:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>
                <div className="container">
                    <div class= "data-container">
                        <h4>Ana dil:</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>

            `
        })
        .catch(() => {
            if(countryName.length === 0) {
                result.innerHTML = `
                    <h3>Arama alanı boş bırakılamaz</h3>
                `
            }
            else{
                result.innerHTML = `
                    <h3>Lütfen bir ülke ismi girin</h3>
                `
            }
        })
})