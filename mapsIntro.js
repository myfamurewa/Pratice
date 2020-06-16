//maps intro
// maps are data structure that store key value pairs
// js objects are maps
//normally you won't need to implement your own map in JS
// es6 map provides some additional features not present in a normal object


let myMap = function() {
	this.collection = {};
	this.count = 0;
	this.size = function() {
		return this.count;
	};
	this.set = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};
	this.has = function(key) {
		return (key in this.collection);
	};
	this.get = function(key) {
		return (key in this.collection) ? this.collection[key] : null;
	};
	this.delete = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
};

let map = new myMap();
map.set("arms", 2)
map.set('fingers', 10)
map.set("eyes", 2)
map.set('belly button', 1)

console.log(map.get('fingers'))

//es6 map
let map2 = new Map();
map2.has('hands')
map2.entries()

let keyObj = {},
    keyFunction = function() {};
// created by watching the maps intro on freecode camp
// WeakMaps are next

