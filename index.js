function reversOrdering(sentence){

  const str = sentence;
  const wordsArray = str.split(' ');
  const reversArray = wordsArray.reverse(); 
  const str2 = reversArray.join(' ');
  return str2;
}
console.log(reversOrdering('Hello world , welcome to JavaScript'));