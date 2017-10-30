// Trint tech test

// Least recently used 
//  max 5 in array
// 

function Cache(){
// array of objects
this.cacheList = []
this.cacheLimit = 5


}
// pushes object into an array
Cache.prototype.addToList = function(key, value){
    var obj = {};
    obj[key] = value;
    this.cacheList.unshift(obj);
    // if cache is over 5 remove the LRU
    if (this.cacheList.length > this.cacheLimit) {
        this.cacheList.splice(this.cacheList.length -1, 1)
    }
}


// get an object from the array
Cache.prototype.getFromList = function(key){
    // get the value
    for (i = 0; i < this.cacheList.length; i++) { 
        if (this.cacheList[i][key]){
            value =  this.cacheList[i][key];
            // place the object at the front of the array
            var obj = this.cacheList[i];
            this.cacheList.splice(i, 1);
            this.cacheList.unshift(obj);
            return value;
        }
    }

}

// // get a list of 5

// cache = new Cache();
// cache.addToList('a', 5);
// cache.addToList('b', 2);
// cache.addToList('c', 89);
// cache.addToList('d', 12);
// cache.addToList('c', 3);
// cache.addToList('q', 'has a been removed?');
// // cache.addToList('f', 3);
// console.log(cache.cacheList);
// console.log(cache.getFromList('d'));
// console.log(cache.cacheList);