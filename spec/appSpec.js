describe("Cache", function() {
    beforeEach(function(){
      cache = new Cache()
    }); 
    
    it("should add objects to the cacheList", function(){
        cache.addToList('a','test')
        expect(cache.cacheList[0]).toEqual({a: 'test'})
    });

    it("should only be able to add a maximum of 5 objects to the cacheList", function(){
        cache.addToList('a','one')
        cache.addToList('b','two')
        cache.addToList('c','three')
        cache.addToList('d','four')
        cache.addToList('e','five')
        cache.addToList('f','six')
        cache.addToList('g','seven')
        expect(cache.cacheList.length).toEqual(5);
    });

    it("should place the most recently added object at the start of the cacheList", function(){
        cache.addToList('a','one')
        cache.addToList('b','two')
        expect(cache.cacheList[0]).toEqual({b: 'two'});
    });



    it("should be able to get data from the cacheList", function(){
        cache.addToList('d','four')
        expect(cache.getFromList('d')).toEqual('four');
    });

    it("should place the object as the MRU when called by getFromList", function(){
        cache.addToList('d','four')
        cache.addToList('b','two')
        cache.addToList('c','three')
        cache.getFromList('b')
        expect(cache.cacheList[0]).toEqual({b: 'two'});
    });

});