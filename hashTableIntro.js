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

function hashStringToInt(s, tableSize) {
    let hash = 17;
    // hash tables usually start at a prime number 
    // this will spread out where the keys are store
    for(let i = 0; i < s.length; i++){
        hash = (19 * hash * s.charCodeAt(i)) % tableSize
    }

    return hash;
}

class HashTable{

    table = new Array(233)
    numItems = 0;

    resize = () => {
        const newTable = new Array(table.length * 2)
        this.table.forEach(item => {
            if(item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length )
                    const idx = hashStringToInt(key, this.table.length)
                    if(newTable[idx]) {
                        newTable[idx].push([key, value])
                    } else {
                        newTable[idx] = [[key, value]]
                    }
                    newTable[idx] = value;
                })
            }
        })
        this.table = newTable
    };
    
    getItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length)
        if(!this.table[idx]){
            return null
        }
        //O(n)
        return this.table[idx].find(x => x[0] === key)[1]
    }
    setItem = (key, value) => {
        this.numItems++
        // this will count even if you just change a preexisting value which isn't ideal
        const loadFactor = this.numItems / this.table.length
        if(loadFactor > .8){
            //resize
            this.resize()
        }
        const idx = hashStringToInt(key, this.table.length)
        if(this.table[idx]) {
            this.table[idx].push([key, value])
        } else {
        this.table[idx] = [[key, value]]
        }
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Calvin")
myTable.setItem("lastName", "Cambridge")
myTable.setItem("age", 25)
myTable.setItem("dob", "7/6/1995")
// console.log(myTable.table)
console.log(myTable.getItem("firstName"))
console.log(myTable.getItem("lastName"))
console.log(myTable.getItem("age"))
console.log(myTable.getItem("dob"))