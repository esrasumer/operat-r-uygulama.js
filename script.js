const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

let IndexCan;
let IndexAda;

IndexAda = (kgAda) / (heightAda * heightAda);
IndexCan = (kgCan) / (heightCan * heightCan);

console.log(IndexAda, IndexCan);

let adaHigherIndex = IndexAda > IndexCan;

console.log(adaHigherIndex);