let data; //設全域變數代表全部圖片資料
let startPic=0;

let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function (response) {
    return response.json();
}).then(function (result) {
    data = result["result"]["results"]; //將所有圖片存放入data中
    catchData(data,startPic,startPic+8);//呼叫第0至8張
    startPic=startPic+8;//執行完catchData將指標startPic往後+8
})
   let cards = document.querySelector('.cards');
   function catchData(data,start,end){  //設一catchData函式可重複呼叫
    let target = data.slice(start,end);
    for (let item of target) {
        let card = document.createElement('div');
        card.className = "mycard";

        let container=document.createElement("div");
        container.classList="imgContainer";

        let img = document.createElement('img');
        img.setAttribute("src", "http://" + item["file"].split("http://")[1])
        img.setAttribute("alt",item["stitle"]);
 
        let myh3 = document.createElement('h3');
        let title = document.createTextNode(item["stitle"]);
        myh3.appendChild(title);
       
        container.appendChild(img);
        card.append(container);
        card.appendChild(myh3);
        cards.appendChild(card);
    }  
};
    let myButton=document.querySelector("section button");
    myButton.addEventListener("click", e => {
    console.log(startPic);
    catchData(data,startPic,startPic+8);
    startPic=startPic+8;
})
























let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});
