
  // filtered is [12, 130, 44]
  
/*
const fname = "anupama maduriya"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${fname} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

*/

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44];//
  //.filter(isBigEnough);

  console.log(filtered);
  console.log(filtered.filter(isBigEnough)); 