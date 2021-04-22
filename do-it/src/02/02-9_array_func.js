function parse(qs) {
  var queryStr = qs.substr(1);

  var chunks = qs.split('&');

  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    // var value = parts[1];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }

  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    // const parts = chunk.split('=');
    // const key = parts[0];
    // var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  const result2 = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });

  return result;
}

// reduce example
// change array to object

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, , 5, 6, 7, 8, 9, 10]);

function parse_2(qs) {
  var queryStr = qs.substr(1);

  var chunks = qs.split('&');

  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      // item = {key: 'banana', value: '10'}
      result[item.key] = item.value;
      return result;
    }, {});
  // { banana: '10', apple: '20', orange: '30'}
}
