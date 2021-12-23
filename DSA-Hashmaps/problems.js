const HashMap = require('./Hashmaps');
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = 0.5

function main() {
    const lotr = new HashMap();

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard')
    
    console.log(lotr._hashTable)

}

main();

function removeDuplicates(string) {
	result = ''
	map1 = new Map();
  for (let i =0; i < string.length; i++) {
  	if(!map1.has(string[i])) {
    	map1.set(string[i], 1);
      result += string[i];
    }
  }
  return result
}

function palindromeChecker(string) {
	let map1 = new Map();
  let characters = [];
  let odd = 0;
  for (let i = 0; i < string.length; i++) {
  	if (!map1.has(string[i])) {
    	characters.push(string[i]);
      map1.set(string[i], 1);
    } else {
    	let current = map1.get(string[i]);
      map1.set(string[i], (current + 1));
    }
  }
  for (let j = 0; j < characters.length; j++) {
  	if (map1.get(characters[j]) % 2 !== 0) {
    	odd++;
    }
  }
  if ( odd > 1) {
  	return false;
  }
  return true;
}

console.log(removeDuplicates('google me harder tyler'))