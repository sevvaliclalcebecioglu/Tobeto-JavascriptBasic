var age = 15;
var age1 = 14;

// else-if satırı birden fazla olabilir ama else sadece bir satır olur.

// koşulda yapmış olduğum sıralamam önemli değildir. İstediğime göre sıralayabilirim.

// aşağıdaki kod çalıştığı zaman öncelikle yaşı bir arttıracak sonra da koşula girecek.
function ageUp(){
    age++;
    
    age1++;

    if ( age < 18){
        console.log("Yaşınız 18'den küçüktür.");
    }else if ( age > 18){
        console.log("Yaşınız 18'den büyüktür.");
    }else{
        console.log("Yaşınız 18'dir.");
    }

    // İç içe koşul da yazabiliriz.
    if (age1 <= 18){
        if (age1 == 18 ){
            console.log("Yaşınız 18'dir.");
        } else {
            console.log("Yaşınız 18'den küçüktür.");
        }
    } else if ( age1 > 18 && age1 < 24) {
        console.log("Yaşınız 18 ile 24 arasındadır.");
    } else if ( age1 > 24 || age1 == 24){
        console.log("Yaşınız 24 ya da üstüdür.")
    }

    // && = ve operatörü ; bütün koşullar true ise çalışır.

    // || = ya da operatörü ; şartlardan birinin true olması yeterli
}