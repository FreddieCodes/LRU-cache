function Cache() {
    this.cacheList = []
    this.cacheLimit = 5
}

Cache.prototype.addToList = function (key, value) {
    var obj = {};
    obj[key] = value;
    this.cacheList.unshift(obj);
    if (this.cacheList.length > this.cacheLimit) {
        this.cacheList.splice(this.cacheList.length - 1, 1)
    }
}

Cache.prototype.getFromList = function (key) {
    for (i = 0; i < this.cacheList.length; i++) {
        if (this.cacheList[i][key]) {
            value = this.cacheList[i][key];
            var obj = this.cacheList[i];
            this.cacheList.splice(i, 1);
            this.cacheList.unshift(obj);
            return value;
        }
    }
}