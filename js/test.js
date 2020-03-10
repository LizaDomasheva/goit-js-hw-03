const printValue = function(value) {
    console.log(value);
  };
  
  const prettyPrint = function(value) {
    console.log('Logging value: ', value);
  };
  
  const repeat = function(n, action) {
    for (let i = 0; i < n; i += 1) {
      action(i);
    }
  };
  
  // Передаем printValue как callback-функцию
  repeat(3, printValue);
  // 0
  // 1
  // 2
  
  // Передаем prettyPrint как callback-функцию
  repeat(3, prettyPrint);
  // Logging value: 0
  // Logging value: 1
  // Logging value: 2