(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('rivets'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['rivets'], factory);
    }
    else {
        root.nul = factory(root.rivets);
    }
}(this, function(rivets) {
rivets.configure({
  adapter: {
    subscribe: function(obj, keypath, callback) {
      obj.on(keypath, callback);
    },

    unsubscribe: function(obj, keypath, callback) {
      obj.off(keypath, callback);
    },

    read: function(obj, keypath) {
      return obj.get(keypath);
    },

    publish: function(obj, keypath, value) {
      obj.set(keypath, value);
    }
  }
});
    return null;
}));
