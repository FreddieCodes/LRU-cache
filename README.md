Least Recently Used Cache
=====================================
Getting Started
---------
```
git clone https://github.com/FreddieCodes/LRU-cache.git
$ cd LRU-cache
```

Instructions
---------

```
cache = new Cache()
cache.addToList(key, value)
cache.getFromList(key)

```

* To add an item to the list `cache.addToList('a', 1)` (max 5 items in list)
* To get an item from the list `cache.getFromList('a')` (this will also place that item as the most recently used)
* To view the list of items in the cache `cache.cacheList`

A cache can only hold 5 items at a time.

The least recently used item will be removed whenever an item is added to the list when the list is full.

The last item to be used or added will always be the most recently used item.

Technologies
---------
JavaScript

Jasmine (testing)

Testing
---------
To run tests open the SpecRunner.html file in browser.