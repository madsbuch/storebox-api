# Storebox API
This is an unofficial API to [Storebox.com](http://storebox.com).

## Usage

    npm install storebox-api --save 

```js
var sb = require('storebox-api').Storebox("[obtained key]");

test.cards(function(err, result){
    console.log("")
    console.log("Cards:")
    for (var i = result.length - 1; i >= 0; i--) {
        console.log(result[i].name);
    }
});
```

The `[obtained key]` can be found by logging in to Storebox, inspect, and find
the cookie named 'auth-token' (Yes, it is a huge string).