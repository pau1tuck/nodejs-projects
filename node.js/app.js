const UserService = require('./services/user'); // to handle user operations

/*** CRUD ***/
app.post('/users', async (req, res) => {
    const newUser = await UserService.createUser(req.body);
    res.json(newUser);
    // Example response: { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }
});
app.get('/', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
    // Example response: [ { "id": 1, "name": "John Doe", "email": "john.doe@example.com" } ]
});
app.put('/user/:userId', async (req, res) => {
    const updatedUser = await UserService.updateUser(req.params.userId, req.body);
    res.json(updatedUser);
    // Example response: { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }
});
app.delete('/user/:userId', async (req, res) => {
    await UserService.deleteUser(req.params.userId);
    res.json({ message: `User ${req.params.userId} has been deleted` });
    // Example response: { "message": "User 1 has been deleted" }
});

/*** USE ***/
app.use(express.json()); // for parsing application/json

// app.use() with a route and a middleware function.
app.use('/users/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});

/*** GET ***/

app.get('/', (req, res) => {
    res.send(`
        <h1>${app.locals.title}</h1>
        <p>${app.locals.description}</p>
        <p>Version: ${app.locals.version}</p>
        <p>Contact us at <a href="mailto:${app.locals.email}">${app.locals.email}</a></p>
    `);
});

/*** SET ***/
app.set('views', path.join(__dirname, 'views'));

/*** ENGINE ***/
// Registers the given template engine callback as ext.
app.engine('ntl', require('./ntl')); // for files ending with .ntl, use custom template engine

/*** RENDER ***/
app.render('view', { title: 'My App' }, (err, html) => {
    // ...
});

/*** ROUTE ***/
// Return an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Useful for avoiding duplicate route names (and typos).
app.route('/book')
  .get((req, res) => {
    res.send('Retrieve a book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update a book');
  });
	.delete((req, res) => {
    res.send('Delete a book');
  });


/*** LISTEN ***/
app.listen(8080, () => console.log('Server running on port 8080.'));
const server = app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
/*
----------
*/
// Define application-level locals
app.locals.title = 'My Express App';
app.locals.email = 'admin@example.com';
app.locals.description = 'An application to demonstrate app.locals';
app.locals.version = '1.0.0';

// Use the locals in a route

/*
----------
*/

// Load middleware functions at a path for all HTTP request methods.
app.all('/api/*', (req, res, next) => {
    console.log('Accessing the API');
    next(); // pass control to the next handler
});

// Sets the boolean setting name to false, where name is one of the properties from the app settings table.
app.disable('x-powered-by'); // disables the “X-Powered-By” HTTP header

// True if the boolean setting name is disabled (false), where name is one of the properties from the app settings table.
app.disabled('x-powered-by')); // true

// Sets the boolean setting name to true, where name is one of the properties from the app settings table.
app.enable('trust proxy'); // indicate it's behind a front-facing proxy, and to use X-Forwarded-* headers

// True if the boolean setting name is enabled (true), where name is one of the properties from the app settings table.
app.enabled('trust proxy')); // true



// app.mountpath
// The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
// For example, if the parent app was created as const app = express(); and then app.use('/admin', subApp);, the subApp would have the app.mountpath property set to '/admin'.

// Add callback triggers to route parameters.
app.param('userId', (req, res, next, id) => {
    // Get the user details from the User model and attach it to the request object
    User.find(id, (user) => {
        if (user) {
            req.user = user;
            next();
        } else {
            next(new Error('User not found.'));
        }
    });
});

// app.path()
// Returns the canonical route path for the application, or mounted sub-applications.
// For example, if the parent app was created as const app = express(); and then app.use('/admin', subApp);, calling subApp.path() would return '/admin'.