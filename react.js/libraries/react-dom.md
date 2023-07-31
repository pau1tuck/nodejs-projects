# React DOM

## Introduction

React has fundamentally changed the way we think about web application architecture, and one of the cornerstones of this approach is its virtual DOM. However, for our virtual DOM components to ultimately interact with the actual, "real" browser Document Object Model (DOM), there needs to be a bridge. This is where ReactDOM comes in.

ReactDOM is a package that provides DOM-specific methods, which can be used at the top level of a web app to enable an efficient, flexible, and smooth interaction with the actual DOM. In this chapter, we'll be exploring the core features and methods provided by the ReactDOM package.

## What is React DOM?

In simplest terms, React DOM is the glue between React and the DOM. Whenever a component's state changes, React needs to determine whether an actual DOM update is necessary. It does this by creating a new virtual DOM and comparing it with the old one. Only in places where there is a difference does React update the actual DOM.

React DOM provides a way for React to interact with the actual DOM. One of its main responsibilities is to handle the process of updating the DOM to match the React components.

## Key Functions in React DOM

React DOM comes with several key methods, which are essential to its functioning. Let's go over these:

### ReactDOM.render()

This is likely the most commonly used method, and it's most often called once in a typical React app. This is what you use to render a React element into a root DOM node. For example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <h1>Hello, world!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In this example, `ReactDOM.render()` method is being used to render the `App` component into a DOM node with the id of 'root'.

### ReactDOM.createRoot()

React 18 introduces a new root API: `ReactDOM.createRoot()`. Unlike `ReactDOM.render()`, it sets up a concurrent mode by default, which allows React features like Suspense, startTransition, and selective hydration to work out of the box.

Here's an example of using `ReactDOM.createRoot()`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <h1>Hello, world!</h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

In this example, we first create a root with `ReactDOM.createRoot()`, and then call `root.render(<App />)` to render our `App` component.

### ReactDOM.unmountComponentAtNode()

This function removes a mounted React component from the DOM and cleans up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns `true` if a component was unmounted and `false` if there was no component to unmount.

```jsx
ReactDOM.unmountComponentAtNode(container)
```

### ReactDOM.findDOMNode()

If this component has been mounted into the DOM, this returns the corresponding native browser DOM element. Generally, most of your component's interactions with the DOM should be done through the props and state, not by interacting with the DOM itself.

```jsx
ReactDOM.findDOMNode(component)
```

It's important to note that `findDOMNode` is an escape hatch used to access the underlying DOM node. In most cases, use of this method is discouraged because it pierces the component abstraction.

## Using React DOM in a Project

Let's use these methods in a simple project. We'll create a button that mounts and unmounts a greeting message.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  mount() {
    ReactDOM.render(<Message />, document.getElementById('root'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="root"></div>
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

In this class-based example, we're defining mount and unmount methods within our App component. The mount method uses ReactDOM.render() to render a Message component into a DOM node with the ID of 'root'. The unmount method uses ReactDOM.unmountComponentAtNode() to unmount the component at the 'root' node.

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  function toggleMount() {
    setIsMounted(!isMounted);
  }

  return (
    <div>
      <button onClick={toggleMount}>
        {isMounted ? 'Unmount' : 'Mount'}
      </button>
      <div id="root">{isMounted ? <Message /> : null}</div>
    </div>
  );
}

function Message() {
  return <h1>Hello, World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
```

In the functional component version, we're using a state variable isMounted to track whether the Message component should be rendered. When the button is clicked, the toggleMount function will set isMounted to its opposite value, effectively mounting or unmounting the Message component.

For this functional component example, we use the newer ReactDOM.createRoot().render() method to render our App component. The Message component is now conditionally rendered based on the state of isMounted, removing the need for direct DOM manipulation via ReactDOM.render() and ReactDOM.unmountComponentAtNode().

## Conclusion

React DOM is a powerful tool that serves as a vital bridge between the React world and the DOM world. It provides a number of methods for interacting with the actual DOM, including rendering React elements into a DOM, unmounting them, and even finding the actual DOM node a component corresponds to.

While most of your interaction with the DOM in a React application will be through the abstraction of components, having an understanding of React DOM will help you better understand how React works under the hood and how it interacts with the browser's native environment.

As you continue your journey with React, you'll likely find less and less need to directly interact with the DOM, but it's important to know how to when the need arises. And that's where having a solid understanding of React DOM comes into play.
