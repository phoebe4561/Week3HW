// let src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
// fetch(src).then(function(response){
//     return response.json();
// }).then(function(result){
//     let target=result["result"]["results"];
//     for (let targetData of target){
//        url = "http://"+targetData["file"].split("http://")[1]
//     console.log(targetData["stitle"]+url)
//     }
// });



let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function (response) {
    return response.json();
}).then(function (result) {
    let siteArr = result["result"]["results"];
    let target = siteArr.slice(0, 8);
    for (let item of target) {
        let cards = document.querySelector('.cards');

        let card = document.createElement('div');
        card.className = "mycard";

        let myh3 = document.createElement('h3');
        let title = document.createTextNode(item["stitle"]);
        myh3.appendChild(title);

        let imgDiv = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "http://" + item["file"].split("http://")[1])
        imgDiv.appendChild(img);

        card.appendChild(img);
        card.appendChild(myh3);
        cards.appendChild(card);

    }
});

























let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});
