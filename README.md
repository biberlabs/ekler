# ekler
Türkçe'de kullanılan eklerin javascript ile kontrolü ve eklenmesi. Herhangi bir ek kütüphaneye ihtiyaç duymaz.
```text
https://www.npmjs.com/package/turkish-suffixes
https://github.com/bhdrgkz/turkish-suffixes
```

#değişkenler ve değerleri
```text
ekler -> "in", "e", "i", "de", "den", "ile"
ayraçlar -> true, false (false ise ayraç kullanılmaz.)
ayraçişaretleri -> "'","`" (Hangi işaret ile ayrılmak istenirse o kullanılabilir.)
```

## örnekler
```js
var string        = "İstanbul",
    suffix        = "de",
    apostrof      = true,
    apostrofMark  = "'";
var newString = suffixes(string, suffix, apostrof, apostrofMark);
console.log(newString); //İstanbul'da
```




