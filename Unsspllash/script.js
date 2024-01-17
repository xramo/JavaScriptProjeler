dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();
  
    if(hour >= 7 && hour < 19){
      document.body.style.backgroundColor = '#efefef';
      document.body.style.color = '#333';
    }
    else{
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#efefef';
    }
}
  
window.addEventListener('load', dayNightTheme);

document.querySelector("#input").addEventListener("keypress", (e) => {
// console.log(e);
    if (e.key == "Enter")
        apiRequest();
    });

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});

const apiRequest = () => {

    document.querySelector("#result").textContent = "";

    const url = `https://api.unsplash.com/search/photos?query=${input.value}'&per_page=30&client_id=q3rstbnxVLkrhiqpU1xa_0WgKkienkqCicQ3W1SP2xQ`;

    fetch(url)
        .then(response => response.json()
        )
        .then(data => {
            loadImages(data);
        })
        .catch(error => console.log(error));   
}

const loadImages = (data) => {
    console.log(data);
    for(let i = 0;i < data.results.length;i++){
        let image = document.createElement("div");
        image.className = "img";
        image.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768)`;
        image.addEventListener("dblclick", () => {
            window.open(data.results[i].links.download, '_blank');
        })
        document.querySelector("#result").appendChild(image);
    }
}