const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);

// for morgan
app.use(morgan('dev'));

app.use(express.static('public'));

// register view engine 
app.set('view engine', 'ejs');

const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
   //app.use((req, res, next) => {
    //console.log('in the next middleware');
     next();
   //});


  //app.use((req, res, next) => {
    //console.log('new request made:');
    //console.log('host: ', req.hostname);
    //console.log('path: ', req.path);
    //console.log('method: ', req.method);
    //next ();
  //});

  


app.get('/', (req, res) => {
    res.render('index', {title:'Home', blogs});
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });

  app.get('/blogs/create', (req, res) => {
     res.render('create', { title: 'Create a new blog' });
  });

  // 404 page
  app.use((req, res) => {
    res.render('404', { title: '404' });
  });

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');\
    res.sendFile('./views/about.html', {root: __dirname});
});


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })
// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})