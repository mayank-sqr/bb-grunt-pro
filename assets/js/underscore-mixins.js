/**
 * mixin for Underscore.js
 * @author: mohandere
 * @version 1.0
 */
(function(){

// An internal function for creating assigner functions.
var createAssigner = function(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
};


_.mixin({

    extendOwn: createAssigner(_.keys),
    // ### _.objMap
    // _.map for objects, keeps key/value associations
    objMap: function (input, mapper, context) {
      return _.reduce(input, function (obj, v, k) {
               obj[k] = mapper.call(context, v, k, input);
               return obj;
             }, {}, context);
    },
    // ### _.objFilter
    // _.filter for objects, keeps key/value associations
    // but only includes the properties that pass test().

    /**
     *  var filterOpts = {
          brand_ids: "80,92,23,2218,1048",
          brand_ids_2154: "92,3359,3320,3321,753,58,3121,7,280,13,1410,3323,79,1114,3322",
          catalog_type:"cross_brand"
        }
        var r = _.objFilter(filterOpts, function(value, key){
         return key == 'brand_ids';
        });
        console.log(r);
    */

    objFilter: function (input, test, context) {
      return _.reduce(input, function (obj, v, k) {
               if (test.call(context, v, k, input)) {
                 obj[k] = v;
               }
               return obj;
             }, {}, context);
    },
    // ### _.objReject
    //
    // _.reject for objects, keeps key/value associations
    // but does not include the properties that pass test().
    objReject: function (input, test, context) {
      return _.reduce(input, function (obj, v, k) {
               if (!test.call(context, v, k, input)) {
                 obj[k] = v;
               }
               return obj;
             }, {}, context);
    },

    // Returns a predicate for checking whether an object has a given set of
    // `key:value` pairs.
    matcher: function(attrs) {
      attrs = _.extendOwn({}, attrs);
      return function(obj) {
        return _.isMatch(obj, attrs);
      };
    },

    // Returns whether an object has a given set of `key:value` pairs.
    isMatch: function(object, attrs) {
      var keys = _.keys(attrs), length = keys.length;
      if (object == null) return !length;
      var obj = Object(object);
      for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    },

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    findWhere: function(obj, attrs) {
      return _.find(obj, _.matcher(attrs));
    },

    //https://github.com/jashkenas/underscore/issues/1372
    distinct: function(items, prop) {
        var unique = [];
        var distinctItems = [];

        _.each(items, function(item) {
            if (unique[item[prop]] === undefined) {
                distinctItems.push(item);
            }

            unique[item[prop]] = 0;
        });

        return distinctItems;
    },
    compactObject : function(o, excludeKeys) {

       var clone = _.clone(o);
       _.each(clone, function(v, k) {

          if( _.indexOf(excludeKeys, k ) != -1 ){
            return true;
          }

          if(!v || v == '' ){
            delete clone[k];
          }
       });
       return clone;
    },
    partitionBySize: function(items, size) {
        var result = _.groupBy(items, function(item, i) {
            return Math.floor(i/size);
        });
        return _.map(result, function(val, key) {
            return val;
        });
    }


  });


})();
