```js
function random(seed = 1 ) {
    return seed * 234567 % 098765
}
seed = 1
seed = random( seed )

state = reduce(state, action) 

function getWeather(city) {
    // prepare request, settings, logc...
    return (db) => {
        return db.find('weather',{city})
    }
}
const thunk = getWeather('Warszawa')

```

# Sideefects  // delay effectful calculations
```ts
function getWeather(city) {
    
    return db.find(city) // impure now 
    return (db) => db.find() // impure later
}
```