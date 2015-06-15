// Create route with name "Home" that will execute the "home" method of the "Static" controller
Router.get('Home', '/', 'Static#home');

// Also allowed:
//Router.get('Static#home', '/');