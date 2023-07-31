# React Router

React Router is a robust and powerful library used in web development with React.js. It enables the creation of Single Page Applications (SPAs), which can simulate the experience of navigating between multiple pages without actually loading new pages from a server. Instead, different 'pages' or views are components that get rendered based on the current path of the URL.

## Background

Before diving into the depths of React Router, let's have a look at why it exists in the first place. Initially, web pages were simple, server-rendered HTML documents. Whenever a user clicked a link, the browser would send a GET request to the server, which would then send back an entirely new HTML page.

As websites began to grow more complex, this model became less ideal, leading to the advent of AJAX (Asynchronous JavaScript and XML). With AJAX, parts of a web page could be updated without having to load an entire new page. Despite these advancements, navigation was still a challenge because it was tied to the server-rendered model.

Enter the concept of SPAs. In a SPA, all necessary code (HTML, CSS, and JavaScript) is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary in response to user actions. This provides a smoother user experience. However, handling navigation in a SPA can be complex. And that's where libraries like React Router come in, enabling seamless navigation in SPAs.

## Features of React Router

React Router provides several features to assist in managing routes and navigation in your application.

### Declarative routing

In React Router, you can set up your application's routing using a declarative style, which is consistent with the rest of the React library. This means you declare your routes as part of your component's render method, as opposed to configuring them in a separate routing table.

### Dynamic routing

React Router is built with dynamic routing in mind. This means that your routes are defined as part of your component rendering, and can therefore change based on your application's state or props. This makes React Router an excellent fit for complex applications where routes may need to change in response to data changes.

### Nested routes

React Router allows you to nest routes within other routes, meaning a particular route can render multiple components at once, depending on the path. This allows complex UIs with multiple levels of component nesting to be constructed.

### URL parameters

React Router makes it easy to extract parameters from the URL, making it easy to pass data from one component to another via the URL. This is particularly useful for things like displaying specific database records based on an ID in the URL.

### Navigation UI

React Router provides built-in components that can be used to create navigation links in your application. This makes it easy to create navigation menus and breadcrumbs.

### Redirects and "404" pages

React Router provides straightforward ways to programmatically redirect the user to a different page, or to render a "404" page when no match is found for the current URL.

## Key Components of React Router

Let's dive a bit deeper into some of the key components of React Router:

### BrowserRouter

This is a component that uses the HTML5 history API (pushState, replaceState, and popstate event) to keep your UI in sync with the URL.

```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

### Route

This is the main building block of React Router. A Route maps a URL path to a React component. When the current location matches the path, the router renders the specified UI component.

```jsx
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}
```

### Link and NavLink

The `Link` component is used to create links in your application that tie into the React Router library and update the URL and the view of your application without a full page refresh.

`NavLink` is a special type of `Link` that can be styled differently when it matches the current URL.

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/about">About</Link>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  );
}
```

### Switch

The `Switch` component is used to group `Route`s. The router will render the first child `Route` or `Redirect` that matches the location.

```jsx
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### Redirect

This component is used to redirect from one route to another.

```jsx
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Route path="/old-route">
      <Redirect to="/new-route" />
    </Route>
  );
}
```

The usage of these components together provides the building blocks for creating complex applications with routing. React Router provides an intuitive way to design the navigational structure of your application. Its rich API and alignment with the React philosophy make it a powerful tool in your React toolkit.

## Using React Router in a Project

Having delved into the details of React Router's features and components, let's now see how to integrate it into a React application. We'll build a simple application that navigates between a Home page, an About page, and a Contact page.

First, we'll need to install React Router into our project:

```shell
npm install react-router-dom
```

Then, we'll set up a few basic components for each of our 'pages':

```jsx
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;1
}
```

Now, let's set up the routing for our application using `BrowserRouter`, `Route`, and `Link`:

```jsx
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}
```

Notice that we've added `exact` to the `/` route. Without `exact`, the `Home` component would also render for `/about/` and `/contact/`, since those URLs include `/` as a subset.

With this simple setup, we've created a SPA that can navigate between different views without a full page refresh.

## Summary

React Router is an invaluable tool for building SPAs with React. It gives developers the power to handle complex routing needs while maintaining the declarative style that React developers are used to. With React Router, we can dynamically render different components based on the application's current URL, and control that URL through built-in components like `Link` and `Redirect`.

In this chapter, we've learned the fundamentals of React Router, including its key components (`BrowserRouter`, `Route`, `Link`, `NavLink`, `Switch`, and `Redirect`) and how they can be composed to build a complex application. We've also seen how to install React Router and integrate it into a simple React application.

React Router is an expansive library, and there's more to explore, including advanced topics like nested routes, route parameters, and programmatically navigating with the `history` prop. These topics build on the fundamentals we've discussed here, and diving into them will further deepen your understanding of routing in React applications.
