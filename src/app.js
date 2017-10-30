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
    var list = this.cacheList
    for (i = 0; i < list.length; i++) {
        if (list[i][key]) {
            var value = list[i][key];
            var obj = list[i];
            list.splice(i, 1);
            list.unshift(obj);
            return value;
        }
    }
}