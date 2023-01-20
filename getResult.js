const fs = require('fs');

const json = JSON.parse(fs.readFileSync('./finalJson.json'));

let res = [];

const extractData = (wantedResult) => {
  json.forEach((row) => {
    Object.keys(row).forEach((val) => {
      if (typeof row[val] === 'string' && row[val].includes(wantedResult))
        if (!res.includes(val)) {
          res.push(val);
        }
    })
  })

  console.log(res);
  res = [];
};

const desiredProducts = ['80B', '76B', '81B', '82B', '84B', '696', '83B', '694', '693'];

desiredProducts.forEach((val) => {
  console.log("RESULT FOR - ", val);
  extractData(val);
  console.log('\n');
})