const fs = require('fs');

const DB_PATH = './src/db/db.json'; 

// Функция для чтения данных из файла
function readDB() {
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

// Функция для записи данных в файл
function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

module.exports = {
  readDB, writeDB
}