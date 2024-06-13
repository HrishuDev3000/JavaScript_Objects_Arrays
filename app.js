console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(list){
    let sum = 0;

    for(let i = 0; i <= list.length - 1; i++){
        sum = sum + list[i];
    }
    console.log(sum)   
}

console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "Atlas Shrugged",
    author: " Ayn Rand",
    pageCount: 1168,
    read: 1,
    info: function(){
        console.log(this.title + " by " + this.author + ", " + this.pageCount + " pages, Read: " + this.read);
    }

};

book.info();


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/*let sentence = "The quick brown fox jumps over the lazy dog";
function reverse(str){
    if(str.length <=1){
        return str;
    }
    else{
        return str.charAt(str.length - 1) + reverse(str.slice(0,str.length - 1));
    }
}
console.log(reverse(sentence));*/

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
//makes words array
for(let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    //makes words letters
    letters.reverse();
    //reverse letters
    words[i] = letters.join("");
    //join back letters
}
const result = words.join(" ");
// join back words
console.log(result);

// Exercise 4 Section
console.log("EXERCISE 3:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";


const resultArray = [];
const rows = cvsData.split("\n");
console.log(rows);
const headers = rows[0].split(",");
console.log(headers);
for(let i = 1; i< rows.length; i++){
    const values = rows[i].split(",");
    console.log(values);
    const temporaryObject ={};
    for (let j = 0; j < headers.lenghth; j++){
        temporaryObject[headers[j]] = values[j];
    }
    resultArray.push(temporaryObject);
}

console.log(resultArray);
