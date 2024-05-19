        // dizi oluştururum;
        // index numaraları her zaman 0'dan başlar.
        var fruits = ["Banana","Orange","Apple","Mango"];

        function push(){
            // sona veri ekler
            fruits.push("Kivi");
            console.log(fruits);
        }

        function pop(){
            //sondan veri çıkarır
            fruits.pop();
            console.log(fruits);
        }

        function unshift(){
            // başa veri ekler
            fruits.unshift("Çilek");
            console.log(fruits);
        }

        function shift(){
            // baştan veri çıkarır
            fruits.shift();
            console.log(fruits);
        }

        function sort(){
            // A-Z sıralama
            fruits.sort();
            console.log(fruits);
        }

        function reverse(){
            // Ters çevirme
            fruits.reverse();
            console.log(fruits);}