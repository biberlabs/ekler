function in_array(obj, arr) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
    }
    return false;
}
        
function suffixes(string,suffix,apostrof,apostrofMark){
    var hardConsonantLetters    = ['ç','f','h','k','p','s','ş','t'];
    var matchesVowelLetters     = string.match(/[aeıioöuü]/g); 
    var lastVowelLetter         = matchesVowelLetters[matchesVowelLetters.length-1];
    var lastLetter              = string.charAt(string.length-1);
    var stringSuffix            = "";
    if(apostrof === false){
        apostrofMark = "";
    }

    switch(suffix){
        case "in":
            if(lastLetter == "a" || lastLetter == "ı"){
                stringSuffix = "nın";
            } else if(lastLetter == "e" || lastLetter == "i") {
                stringSuffix = "nin";
            } else if(lastLetter == "u" || lastLetter == "o") {
                stringSuffix = "nun";
            } else if(lastLetter == "ö" || lastLetter == "ü") {
                stringSuffix = "nün";
            } else if(lastVowelLetter == "a" || lastVowelLetter == "ı" ) {
                stringSuffix = "ın";
            } else if(lastVowelLetter == "e" || lastVowelLetter == "i") {
                stringSuffix = "in";
            } else if(lastVowelLetter == "u" || lastVowelLetter == "o") {
                stringSuffix = "un";
            } else if(lastVowelLetter == "ö" || lastVowelLetter == "ü" ) {
                stringSuffix = "ün";
            } else {
                stringSuffix = "ın";
            }
        break;
        case "e":
            if(lastLetter == "a" || lastLetter == "ı" || lastLetter == "u" || lastLetter == "o"){
                stringSuffix = "ya";
            } else if(lastLetter == "e" || lastLetter == "i" || lastLetter == "ö" || lastLetter == "ü"){
                stringSuffix = "ye";
            } else if(lastVowelLetter == "a" || lastVowelLetter == "ı" || lastVowelLetter == "u" || lastVowelLetter == "o"){
                stringSuffix = "a";
            } else if(lastVowelLetter == "e" || lastVowelLetter == "i" || lastVowelLetter == "ö" || lastVowelLetter == "ü"){
                stringSuffix = "e";
            } else {
                stringSuffix = "a";
            }        
        break;
        case "i":
            if(lastLetter == "a" || lastLetter == "ı"){
                stringSuffix = "yı";
            } else if(lastLetter == "e" || lastLetter == "i"){
                stringSuffix = "yi";
            } else if(lastLetter =="u" || lastLetter == "o"){
                stringSuffix = "yu";
            } else if(lastLetter =="ö" || lastLetter == "ü"){
                stringSuffix = "yü";
            } else if(lastVowelLetter == "a" || lastVowelLetter == "ı"){
                stringSuffix = "ı";
            } else if(lastVowelLetter == "e" || lastVowelLetter == "i"){
                stringSuffix = "i";
            } else if(lastVowelLetter == "u" || lastVowelLetter == "o"){
                stringSuffix = "u";
            } else if(lastVowelLetter == "ü" || lastVowelLetter == "ö"){
                stringSuffix = "ü";
            }      
        break;
        case "de":
            if(lastLetter =="a" || lastLetter == "ı" || lastLetter == "u" || lastLetter == "o"){
                stringSuffix ="da";
            } else if(lastLetter == "e" || lastLetter == "i" || lastLetter == "ö" || lastLetter == "ü"){
                stringSuffix ="de";
            } else if(in_array(lastLetter, hardConsonantLetters) && (lastVowelLetter == "a" || lastVowelLetter =="ı" || lastVowelLetter==="u" || lastVowelLetter==="o") ){
                stringSuffix = "ta";
            } else if(in_array(lastLetter, hardConsonantLetters) && (lastVowelLetter == "e" || lastVowelLetter =="i" || lastVowelLetter=="ü" || lastVowelLetter=="ö") ){
                stringSuffix = "te";
            } else if(lastVowelLetter=="a" || lastVowelLetter == "ı" || lastVowelLetter == "u" || lastVowelLetter =="o"){
                stringSuffix = "da";
            } else if(lastVowelLetter=="e" || lastVowelLetter == "i" || lastVowelLetter == "ü" || lastVowelLetter == "ö"){
                stringSuffix = "de";
            } else if(in_array(lastLetter, hardConsonantLetters)){
                stringSuffix = "ta";
            } else {
                stringSuffix = "da";
            }         
        break;        
        case "den":
            if(lastLetter == "a" || lastLetter == "ı" || lastLetter == "u" || lastLetter == "o"){
                stringSuffix = "dan";
            } else if(lastLetter == "e" || lastLetter == "i" || lastLetter == "ö" || lastLetter == "ü"){
                stringSuffix = "den";
            } else if(in_array(lastLetter, hardConsonantLetters) && (lastVowelLetter == "a" || lastVowelLetter == "ı" || lastVowelLetter == "u" || lastVowelLetter=="o") ){
                stringSuffix = "tan";
            } else if(in_array(lastLetter, hardConsonantLetters) && (lastVowelLetter == "e" || lastVowelLetter == "i" || lastVowelLetter == "ö" || lastVowelLetter=="ü") ){
                stringSuffix = "ten";
            } else if(lastVowelLetter == "a" || lastVowelLetter == "ı" || lastVowelLetter == "u" || lastVowelLetter == "o"){
                stringSuffix = "dan";
            } else if(lastVowelLetter == "e" || lastVowelLetter == "i" || lastVowelLetter == "ö" || lastVowelLetter == "ü"){
                stringSuffix = "den";
            } else if(in_array(lastLetter, hardConsonantLetters)){
                stringSuffix = "tan";
            } else {
                stringSuffix = "dan";
            }         
        break;        
        case "ile":
            apostrofMark = "";
            if(lastLetter == "a" || lastLetter == "ı" || lastLetter == "u" || lastLetter == "o"){
                stringSuffix = "yla";
            } else if(lastLetter == "e" || lastLetter == "i" || lastLetter == "ö" || lastLetter == "ü"){
                stringSuffix = "yle";
            } else if(lastVowelLetter == "a" || lastVowelLetter == "ı" || lastVowelLetter == "u" || lastVowelLetter == "o"){
                stringSuffix = "la";
            } else if(lastVowelLetter == "e" || lastVowelLetter == "i" || lastVowelLetter == "ö" || lastVowelLetter == "ü"){
                stringSuffix = "le";
            } else {
                stringSuffix = "la";
            }
        break;
    }
   	var result = string + apostrofMark + stringSuffix;
    return result;
}
