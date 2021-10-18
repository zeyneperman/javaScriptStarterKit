console.log('merhaba kodlama..io')

let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarBugun)


// javascript type safe değildir
// let keywordunun vardan farkı : değişkenler tanımlandığı alanda geçerlidir eğer var ile kullanılırsa tüm alanlarda kullanılır. 

//const euroDun = 11.2 
// euroDun = 10 seklinde bir değisiklik yappmak istersek hata alırız çunku bir sabit belirledik ve
// bu sabitin değerini kafamıza göre değistiremeyiz 
//consoleDun.log(euroDun)

// birden fazla veriyi aynı anda tutabilmek için arraylari kullanırız
let krediler = ["konut kredisi", "Emlak konut kredisi",["a","d"]]

console.log("<ul>")
for (let i = 0; i < krediler.length; i++) {
    console.log("<li>"+krediler[i]+"<li>")
    
}
console.log("<ul>")

