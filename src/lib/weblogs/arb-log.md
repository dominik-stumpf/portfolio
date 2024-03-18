---
title: arb-log
date: 2000-01-22
---

## heading

_italic_ **bold** ~~strikethrough~~

_Whereas disregard and contempt for human rights have resulted_

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

<i style="color: violet">html in md</i>

```tsx
const App = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <p>The light is {isOn ? "on" : "off"}</p>
      <button onClick={toggleIsOn}>Toggle</button>
    </div>
  );
};
```

## A Handy Reference to React Hooks

| Hook Name     | Description                                                                                   | Use Case                                      |
| ------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `useState`    | Adds state to functional components, making it possible to manage and update component state. | Managing and displaying component state.      |
| `useEffect`   | Enables side effects like data fetching, DOM manipulation, and more in functional components. | Handling asynchronous tasks and side effects. |
| `useContext`  | Accesses the context for data that can be shared across the component tree.                   | Sharing data between components.              |
| `useRef`      | Creates mutable references to DOM elements or values that persist across renders.             | Managing DOM elements and values.             |
| `useReducer`  | Manages more complex state logic by using a reducer function and an initial state.            | Handling complex state transitions.           |
| `useMemo`     | Memoizes the result of a function to optimize performance.                                    | Optimizing expensive calculations.            |
| `useCallback` | Memoizes callbacks to avoid unnecessary re-renders.                                           | Optimizing callback functions.                |
| `useHistory`  | Provides access to the browser's history object.                                              | Handling client-side routing.                 |

These are just a few of the built-in Hooks available in React. Each Hook serves a specific purpose, empowering you to build versatile and efficient applications.

## Tasklist

- [ ] to do
- [x] done

```rust
fn main() {
  println!("rsrsrs");
}
```

Lift($$L$$) can be determined by Lift Coefficient ($$C_L$$) like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

ellipsis...
double dash --

"double"

'single'

backtick`

(c) (tm) (r)

32 eur -> gbp usd

`43 +- 4 = 488`

```py
usd = 99 // eur :uk:
l = 32
l >= 488
```

43 +- 4 = 488 :+1:
