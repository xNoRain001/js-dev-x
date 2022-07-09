(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global._ = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var getType = function getType(v) {
    if (v == null) {
      return "".concat(v);
    }

    var type = _typeof(v);

    return !/^(object|function)$/.test(type) ? type : Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
  };

  var isArrayLike = function isArrayLike(v) {
    return v != null && isLength(v.length) && !/^function$/.test(_typeof(v));
  };

  var isLength = function isLength(n) {
    return typeof n === 'number' && n > -1 && n % 1 === 0 && n <= Number.MAX_SAFE_INTEGER;
  };

  var isPrimitive = function isPrimitive(v) {
    return !(v !== null && _typeof(v) === 'object');
  };

  var each = function each(obj, cb) {
    var type = getType(obj);

    if (type === 'array' || isArrayLike(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (cb.call(obj, i, obj[i]) === false) {
          break;
        }
      }
    } else if (type === 'object') {
      var stringProp = Object.keys(obj);
      var symbolProp = Object.getOwnPropertySymbols(obj);
      var keys = stringProp.concat(symbolProp);

      for (var _i = 0, _l = keys.length; _i < _l; _i++) {
        var key = keys[_i];

        if (cb.call(obj, key, obj[key]) === false) {
          break;
        }
      }
    }

    return obj;
  };

  var strategies = {
    array: function array(target) {
      return target.slice();
    },
    object: function object(target, Ctor) {
      var obj = new Ctor();
      each(target, function (key, value) {
        obj[key] = value;
      });
      return obj;
    },
    regexp: function regexp(target, Ctor) {
      return new Ctor(target);
    },
    date: function date(target, Ctor) {
      return new Ctor(target);
    },
    error: function error(target, Ctor) {
      return new Ctor(target.message);
    }
  };

  var shallowClone = function shallowClone(target) {
    if (isPrimitive(target)) {
      return target;
    }

    var type = getType(target);
    var Ctor = target.constructor;
    return strategies[type](target, Ctor);
  };

  var deepClone = function deepClone(target) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakSet();

    if (!/^(array|object)$/.test(getType(target))) {
      return shallowClone(target);
    }

    if (cache.has(target)) {
      return target;
    }

    cache.add(target);
    var obj = new target.constructor();
    each(target, function (key, value) {
      obj[key] = deepClone(value, cache);
    });
    return obj;
  };

  var init = function init(utils) {
    utils.getType = getType;
    utils.isArrayLike = isArrayLike;
    utils.each = each;
    utils.shallowClone = shallowClone;
    utils.deepClone = deepClone;
  };

  var utils = Object.create(null);
  init(utils);

  return utils;

}));
