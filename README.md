# ekler
Türkçe'de kullanılan eklerin javascript ile kontrolü ve eklenmesi. Herhangi bir ek kütüphaneye ihtiyaç duymaz.

#değişkenler ve değerleri
```text
ek -> "in", "e", "i", "de", "den", "ile"
ayraç -> true, false (false ise ayraç kullanılmaz.)
ayraçişareti -> "'","`" (Hangi işaret ile ayrılmak istenirse o kullanılabilir.)
```

## örnekler
```js
var ekler = suffixes("İstanbul", "de", true, "'"); //İstanbul'da
console.log(ekler);
```



