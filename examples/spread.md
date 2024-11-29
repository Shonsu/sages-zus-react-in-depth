```js
obj1 = { a:1,      c: 3 }
obj2 = { a:'x', b:'y', c: 'z', d:'ź' }
obj3 = { ...obj1, ...obj2, q:'placki' } 


// {a: 'x', c: 'z', b: 'y', d: 'ź', q: 'placki'}a: "x"b: "y"c: "z"d: "ź"q: "placki"
obj1
// {a: 1, c: 3}
obj2
// {a: 'x', b: 'y', c: 'z', d: 'ź'}

```

```js
a1 = [1,2,3]
a2 = [3,4,5]

a3 = [ ...a1, ...a2 ]
// (6) [1, 2, 3, 3, 4, 5]

a4 = [ ...a2, 'x', ...a1 ]
// (7) [3, 4, 5, 'x', 1, 2, 3]
```

# Shallow copy
```js
nested = { placki: 123 }
obj1 = { a:1,      c: 3, nested }
obj2 = { a:'x', b:'y', c: 'z', d:'ź' }
obj3 = { ...obj1, ...obj2, q:'placki' } 


{a: 'x', c: 'z', nested: {…}, b: 'y', d: 'ź', …}
obj3.nested.placki = 32456432145
32456432145
obj1.nested
{placki: 32456432145}
```

```js
a = {}
a.b = a

JSON.parse(JSON.stringify(obj))

strucuredClone( cyclicalOK )


```

