```ts

// request = (host,resource,param) =>`${host}/${resource}/${param}`

// Curring
request = (host) => (resource) => (param) => () =>`${host}/${resource}/${param}`;

request ('http://placki.com') ('placki') (123)
'http://placki.com/placki/123'
api = request('http://banana.com')
placki = api('placki')
banany = api('banany')

placek123 = placki(123) // lazy...

placek123() // Engage!
placek123() // Engage!

```