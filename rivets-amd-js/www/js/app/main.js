define(function (require) {
  // Require
  var Observable = require('iota-observable');
  var $ = require('jquery');
  var rivets = require('rivets');
  require('rivets-iota-observable-adapter');
  
  // Create counter object and make it Observable
  var model = {
    counter: {
      value: 0
    }
  };
  Observable.makeObservable(model.counter);

  // Bind counter value to a DOM element
  var template = '<div data-text="counter.value" />';
  var domElement = $(template)[0];
  rivets.bind(domElement, model);

  // Append DOM element to main tree
  $(domElement).appendTo('body');
  
  // Increment counter asynchronously 1000 times
  function incrementCounter() {
    model.counter.set('value', model.counter.value + 1);
    if (model.counter.value < 1000) {
      setTimeout(incrementCounter, 0);
    }
  }
  incrementCounter();
});