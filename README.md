Iota Observable Examples
========================

This repository contains example code for [Iota Observable](http://www.helgoboss.org/projects/iota-observable/).

## standalone-amd-cs

This example demonstrates standalone usage employing [RequireJS](http://requirejs.org/) as AMD module loader and [CoffeeScript](http://coffeescript.org/) as main language.

The project was created using [Volo](http://volojs.org/):
```bash
volo create standalone-amd-cs
cd standalone-amd-cs
volo add iota-observable
volo add cs
# Modify `www/js/app.js`: "cs!app/main"
mv www/js/app/main.js www/js/app/main.coffee
# Modify `main.coffee`
```

## rivets-amd-js

This example shows the combination with [Rivets](http://rivetsjs.com/) employing [RequireJS](http://requirejs.org/) as AMD module loader

The project was created using [Volo](http://volojs.org/):
```
volo create rivets-amd
cd rivets-amd
volo add jquery
volo add rivets
volo add rivets-iota-observable-adapter
volo add iota-observable
# Modify `www/js/app/main.js`
```

