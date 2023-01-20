const csvToJSON = require('csvtojson');
const fs = require('fs');

const csvFilePath = './test.csv';

// csvToJSON().fromFile(csvFilePath)
// .then((jsonObj)=>{
//     JSONObj = jsonObj;
//     console.log('converted sucessfully');
//   })


const getJSON = async () => {
  const finalJson = await csvToJSON().fromFile(csvFilePath);

  fs.writeFileSync('./finalJson.json', JSON.stringify(finalJson));
}

getJSON();
