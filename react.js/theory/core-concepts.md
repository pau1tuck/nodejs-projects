# React Core Concepts

1. **Components**: Components are reusable pieces of code that render HTML elements to the UI, acting as the building blocks of a React application.

2. **JSX**: JSX is a syntax extension for JavaScript that looks similar to HTML and is used to write React components.

3. **Rendering**: Rendering is the process of displaying elements (i.e., components) on the DOM (Document Object Model).

4. **Virtual DOM**: Virtual DOM is a lightweight copy of the actual DOM, which React uses to efficiently update changes in the UI.

5. **State**: State is a JavaScript object that holds data which affects the behavior and rendering of components.

6. **Props**: Props (short for properties) are read-only inputs to components and allow information to be passed from parent components to children.

7. **Functional Components**: Functional components are JavaScript functions that accept props and return a React element.

8. **Class Components**: Class components are ES6 classes that extend from `React.Component` and can maintain their own data with state.

9. **Lifecycle Methods**: Lifecycle methods are special functions in class components that execute at different points during a component's lifecycle (e.g., mounting, updating, unmounting).

10. **Hooks**: Hooks are a set of functions provided by React to let you manage state and side effects in functional components.

11. **useState Hook**: The `useState` hook is a function that lets you add React state to functional components.

12. **useEffect Hook**: The `useEffect` hook allows you to perform side effects (such as data fetching or manual DOM manipulation) in functional components.

13. **Context API**: The Context API provides a way to share values (state and functions) between components without passing props manually at every level.

14. **React Router**: React Router is a library that provides navigational components for building single-page applications with routing capabilities.

15. **Conditional Rendering**: Conditional rendering is a pattern used to render different UI markup based on certain conditions.

16. **Lists and Keys**: Lists are collections of items, and keys are unique identifiers given to each element in a list during rendering.

17. **Refs**: Refs (short for references) provide a way to access and interact with DOM nodes or React elements created in the render method.

18. **Event Handling**: Event handling in React is the process of managing user interactions like clicks, keyboard input, form submission, etc.

19. **Fragments**: Fragments allow you to return multiple elements from a component without adding extra nodes to the DOM.

20. **Higher-Order Components (HOCs)**: HOCs are functions that take a component and return a new component with additional props or behavior.

21. **Render Props**: Render props is a technique where a child component is a function that returns a React element, and the parent passes properties to this function.

22. **Error Boundaries**: Error boundaries are React components that catch JavaScript errors in their child component hierarchy, log those errors, and display a fallback UI.

23. **Portals**: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

24. **Suspense**: Suspense is a mechanism for suspending component rendering while waiting for some data to load.

25. **Lazy Loading**: Lazy loading is a technique that allows you to load and code-split components in a React app only when they are required.

26. **Controlled Components**: Controlled components have their state controlled by React, usually with user input directly setting state.

27. **Uncontrolled Components**: Uncontrolled components store their own state internally, and you query the DOM using a ref to find its current value when you need it.

28. **React.memo**: `React.memo` is a higher order component that memorizes the rendered output of your functional components and skips rendering when the props are the same.

29. **Forwarding Refs**: Forwarding refs is a feature that allows some components to take a `ref` they receive and pass it further down to a child component.

30. **React.PureComponent**: `React.PureComponent` is a base class that performs a shallow comparison on new and old props and state and reduces the chance of unnecessary renders.

31. **React.StrictMode**: `React.StrictMode` is a wrapper component that checks your React application for potential problems and warns you about them in the console.

32. **React.Fragment**: `React.Fragment` is a wrapper component that does not produce any HTML, it allows us to group a list of children without adding extra nodes to the DOM.

33. **Redux**: Redux is an open-source JavaScript library used for managing and centralizing application state, often used with React.

34. **Flux**: Flux is an architectural pattern that enforces unidirectional data flow — it's the predecessor of Redux.

35. **useContext Hook**: The `useContext` hook is used to create common data that can be accessed throughout the component tree without passing the props down manually to each level.

36. **useReducer Hook**: The `useReducer` hook is used for state management in React. It's an alternative to `useState`.

37. **Immutable State**: Immutable state is a concept where the state is never modified directly. Instead, a new state is created whenever a change is required.

38. **PropTypes**: PropTypes is a library that was originally included in React but eventually separated. It's used to set typechecking and validate props passed to the component.

39. **React Developer Tools**: React Developer Tools is a browser extension that allows you to inspect the React component hierarchies in the Chrome DevTools.

40. **Axios**: Axios is a promise-based HTTP client for the browser and Node.js often used with React to make HTTP requests.

41. **Fetch API**: The Fetch API is a native way to make HTTP requests and is built into most modern browsers.

42. **React Testing Library**: React Testing Library is a lightweight solution for testing React components.

43. **Jest**: Jest is a JavaScript testing framework maintained by Facebook, Inc. with a focus on simplicity, often used to test React applications.

44. **Enzyme**: Enzyme is a JavaScript testing utility for React that makes it easier to test your React Components' output.

45. **Server-Side Rendering (SSR)**: SSR is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client.

46. **Next.js**: Next.js is a React framework that provides infrastructure and simple development experience for server-rendered React applications.

47. **React Native**: React Native is a framework for building native mobile apps using JavaScript and React.

48. **React Fiber**: React Fiber is a reimplementation of React's core reconciliation algorithm, it's the result of over two years of research by the React team.

49. **Shallow Rendering**: Shallow rendering is a testing method in Enzyme which allows you to render a component "one level deep" and assert facts about what its render method returns, without worrying about the behavior of child components.

50. **Component Composition**: Component composition is a method to combine multiple components to create new components with different functionalities, promoting reusability and separation of concerns.

51. **React.Children API**: The `React.Children` API provides utilities for dealing with the `this.props.children` opaque data structure.

52. **useCallback Hook**: The `useCallback` hook returns a memoized version of a callback function, which only changes if one of its dependencies has changed.

53. **useMemo Hook**: The `useMemo` hook is used when you want to ensure that an expensive computation isn’t redone unless necessary.

54. **useRef Hook**: The `useRef` hook is a function that returns a mutable ref object whose `.current` property is initialized with the passed argument.

55. **React Profiler**: The Profiler is a component that measures the performance of React components.

56. **React.createContext**: `React.createContext` is a method used to create a new context that components can subscribe to.

57. **React.cloneElement**: `React.cloneElement` is used to clone a React element and pass new props to it.

58. **React.isValidElement**: `React.isValidElement` is a method used to check if an object is a valid React element.

59. **useState lazy initialization**: useState allows for lazy initialization where you pass a function that returns the initial state value, improving performance for complex state.

60. **useImperativeHandle Hook**: The `useImperativeHandle` hook customizes the instance value that is exposed to parent components when using `ref`.

61. **React.SuspenseList**: `React.SuspenseList` helps manage the order in which multiple `Suspense` components reveal their content.

62. **React.Lazy**: `React.lazy()` is a function that lets you render a dynamic import as a regular component enabling code-splitting.

63. **Batching SetState Calls**: React batches `setState` calls and performs them for performance optimization, but this behavior can be different in some cases.

64. **useDebugValue Hook**: `useDebugValue` can be used to display a label for custom hooks in React DevTools.

65. **React.memo for Functional Components**: `React.memo` is a higher-order component that helps in optimizing the rendering of functional components by avoiding re-rendering when props don't change.

66. **shouldComponentUpdate**: `shouldComponentUpdate` is a lifecycle method that allows us to opt-out of component re-rendering.

67. **Pure Components**: Pure components are components created with `React.PureComponent`. They restrict re-rendering if state or props do not show any changes.

68. **Composition vs Inheritance**: Composition is a pattern recommended by React over inheritance, where components are organized and reused by passing them as children or wrapping them around each other.

69. **React.Fragment Short Syntax**: `<></>` is a short syntax for `<React.Fragment>`, which lets you group a list of children without adding extra nodes to the DOM.

70. **React Concurrent Mode**: Concurrent Mode is an experimental feature that helps create fluid and responsive user interfaces by allowing interrupted rendering.

71. **Thinking in React**: Thinking in React is a concept where you break down your application into separate, reusable components, arranging them in a hierarchical order.

72. **Controlled vs Uncontrolled Components**: Controlled components have their state managed by React, while uncontrolled components manage their own state.

73. **Lifting State Up**: Lifting State Up is the process of moving shared state to a common ancestor of the components that need it, to facilitate communication between them.

74. **Using Refs with Functional Components**: With the help of `React.forwardRef` and the `useImperativeHandle` hook, you can use refs in functional components.

75. **Using Index as Key**: Using index as a key is an anti-pattern in React because it doesn’t reliably reflect the identity of items in the list.

76. **Typechecking with PropTypes**: PropTypes is a way to enforce which props a component should have and what type they should be, it’s a form of documentation as well.

77. **React StrictMode**: `React.StrictMode` is a wrapper component that identifies potential problems in your application during the development build.

78. **Server-Side Hydration**: Server-side hydration is a technique used to improve the initial load time of server-rendered React apps, where the server-rendered markup is reused instead of being discarded when the client renders.

79. **Render as You Fetch**: Render as You Fetch is a strategy recommended by the React team where you start fetching data as soon as possible, and start rendering as soon as possible.

80. **Suspense Image Component**: A Suspense Image Component is an experimental feature that allows you to use images with React Suspense, and delay
