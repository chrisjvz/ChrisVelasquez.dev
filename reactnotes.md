# React
React apps are made out of components

## Components 

A piece of UI that has its own logic and appearance. Can be as small as a button, 
as large as an entire page. They must always start with a **capital letter** while
html tags must be **lowercase**.

*React components are javascript functions that return markup.*


In `app.js`

```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
* `export default` keywords specify the main component in a file. 

## Styles

Specify a class name with `className` 

``` javascript
<img className="avatar" />
```

Then in a CSS file you can write the CSS rules for it

```css
.avatar {
border-radius: 50%;
}
```

## Displaying Data

JSX allows putting markup into javascript. `{}` let you "escape"
back into javascript so that you can embed some vars from your code
and display it to the user. 

```javascript
return (
  <h1>
    {user.name}
  </h1>
);

// another example doing this inside html attributes

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

Other complex expressions can also be done like string concatenation 


## Conditional Rendering

No special syntax in react, just regular javascript code
```javascript
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

// or using ternary operator

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

// or without need for the ELSE branch
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

## Rendering Lists

Basically, use javascript for loops or the array map() function

```js 
// say we have this array
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
// we can present using map() within a component to transform this array
// into an array of <li> items
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```
`<li>`'s `key` attribute should be passed a string or number that *uniquely*
ids an item among its siblings. 
* `key` should be coming from your data, like a database ID, because it uses 
  these to know what happened if you insert,delete, or reorder items down the line

## Event Handling

Simply declare *event handler* functions inside your components
```js 
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // no need to call() handleClick, you only need
    // to pass it down, React will handle the rest
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

## State and Updating Screen

Import `useState`
```javascript
import { useState } from 'react';
```

Which allows you to now declare *state variables* inside your components
```javascript
function MyButton() {
const [count, setCount] = useState(0);
// ...
```
`useState` gives 2 things...
1. current state, `count`
2. The function that lets you update it, `setCount`

They can be given any names, but usual convention is `[something, setSomething]` \
In this example, the first time button is displayed, `count` = `0` since it was what was
passed in to `useState()`. 

To change state, call `setCount()` and pass new value to it. 

```javascript
function MyButton() {
  // init state to 0
  const [count, setCount] = useState(0);

  function handleClick() {
    // increments state on event handler 
    setCount(count + 1);
  }

  return (
    // bind event handler that changes state
    // to the button
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

**NOTE :** If you render the same component multiple times, each will get its own state 

## Hooks

Functions starting with `use`. `useState` is a React built-in hook

Hooks are more restrictve than other functions. Can only be called *at the top* of 
your components (or other hooks). 

> If you want to use `useState` in a condition or loop, extract a new component and put it there

### useEffect 

For use when dealing with a external system and syncronizing components
- Can be the brower DOM, which would be
considered external from the Virtual DOM

- API Calls



## Sharing Data Between Components

If you need components to *share data and update together*, you need to move the 
state from the individual components that you want to couple "upwards" to the nearest common
ancestor component

```javascript
export default function MyApp() {
  // MyApp component has state now
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      // each buttton gets passed in the count state via props
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```
`props` are what you call information that is passed down like this. \
In the example above MyApp contains...
* `count` state
* `handleClick` event handler

Both are passed down as `props` to each of `MyButton` components and can be read 
from its parent component like so

```javascript
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```

































