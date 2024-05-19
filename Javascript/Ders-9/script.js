function run(){
    var p = document.getElementById("parag");
    console.log(p.innerHTML);
    p.innerHTML = "Merhaba Tobeto";
    console.log(p.innerHTML);
}

function loadList(){
    var fruits = ["Banana","Apple","Orange","Kivi","Mango"];

    var ul = document.getElementById("list");

    for (var i = 0; i < fruits.length; i++) {
        var item = fruits[i];
        var li = document.createElement("li");
        li.innerHTML = "<b>" + item + "</b>";

        ul.appendChild(li);

    }
}