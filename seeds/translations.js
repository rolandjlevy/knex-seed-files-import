const path = require('path');
const fs = require('fs');

const insertsFolderPath = './translations';
const folderPath = path.resolve(__dirname, insertsFolderPath);
const fileNames = fs.readdirSync(folderPath);

const readInsertsFolder = () =>
  fileNames.reduce((acc, fileName) => {
    const filePath = path.join(insertsFolderPath, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const items = JSON.parse(fileContent);
    acc = [...acc, ...items];
    return acc;
  }, []);

const insertsArray = readInsertsFolder();
console.log({ insertsArrayLength: insertsArray.length, insertsArray });

// exports.seed = async function (knex) {
//   try {
//     await knex('b2m.translation').del(); // do we need del()?
//     await knex('b2m.translation').insert(insertsArray);
//     console.log('Data seeded successfully');
//   } catch (error) {
//     console.error('Error seeding data:', error);
//   }
// };
