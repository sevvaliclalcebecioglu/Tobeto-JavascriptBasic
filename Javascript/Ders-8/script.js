var fruits = ["Banana","Apple","Orange","Mango","Kivi"];

function forLoop() {
    // 10 kere dönmek için
    //for (var i =0; i < 10; i++){
    //    console.log(i);
    //}

    // Elimdeki dizinin boyutu kadar dönmek için
    for (var i=0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
}

 // Önce kontrol eder sonra kodu çalıştırır.
function whileLoop() {
    var i = 0;

    while (i < fruits.length){
        console.log(fruits[i]);
        i++;
    }
}
 
 // Kod önce 1 kere çalışır sonra kontrol eder. Sağlanıyorsa tekrar çalışır.
 // O yüzden en az bir kere çalışacak olan kodların do-while ile yazılması lazımdır.
function doWhileLoop() {
    var i = 0;

    do {
        console.log(fruits[i]);

        i++;
    }while (i < fruits.length)

}