// intro to the hash table data structure
// a hash table is a key value lookup
// the values in a hash table can be any sort of data
// at the heart of a hashtable is an array
// we write a hash function that takes a key and returns an index number
// every time you enter the same key you should get the same index number
// when you have two keys that are given to the same index you then chain them by creating a linked list
// having multiple keys at the same index is called a collision

// assuming that you have a "good" hashtable time is constant o(i)
// with a bad hashtable the time complexity is o(n)

const player = {}
player['firstName'] = 'Jah'
player['lastName']= 'Morant'
console.log(player['lastName'])