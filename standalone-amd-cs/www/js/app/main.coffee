define (require) ->
  # Require
  Observable = require('iota-observable')
  
  # Extend from Observable
  class Person extends Observable
    constructor: (@firstName, @lastName) ->
      super()
      
    name: -> 
      @get('firstName') + ' ' + @get('lastName')

  # Create a person
  obj = new Person 'Bela', 'Bartók'

  # Query initial value of name (normally done by view component)
  console.log 'Initial name: ' + obj.get('name')

  # Register observer
  obj.on 'name', -> console.log("Name has changed")

  # Change property value, prints "Name has changed"
  obj.set 'firstName', 'Béla'