const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.urlencoded())
app.use(express.static('public'));


app.post('/formData',(req,res) => {
    //res.send(data.name);
    const data = req.body
    console.log("output")
    console.log(data);
    res.send(`Data received successfully`);
})


app.use(logger)

app.get('/', (req,res) => {
    console.log("home page")
    res.send("Home page")
})

app.get('/users', auth, (req,res) => {
    console.log("users page")
    res.send("users page")
})
/* 
version 1
function logger(req,res,next) {
    console.log("log")
    next()
} */

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

/* 
Version 1
function auth(req,res,next) {
    console.log("auth log");
    next()
} 
*/
function auth(req,res,next) {
    if(req.query.admin==='true'){
        next()
    }
    else{
        res.send("no auth found")
    }
    console.log("auth log");
}

app.get('/home', (req,res) => {
  res.redirect('/');
})

app.get('/about', (req, res) => {
  res.send('About us page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us page');
});

app.get('/download',(req,res) =>{
  res.download('./data.txt')
})

app.get('/name', function(req, res) {
  const name = req.query.name;
  const message = `Hello, ${name}!`;
  res.send(message);
});

app.get('/number', function(req, res) {
  const number = req.query.number;
  const upNum = parseInt(number)
  if(upNum%2==0)
  {
    res.send("Number is even");
  }
  else{
    res.redirect('/');
  }
});

app.set('view engine','hbs');

app.get('/profile', (req, res) => {
    const data = {
      title: 'My App',
      heading: 'Welcome to my app',
      items: ['item 1', 'item 2', 'item 3']
    };
    res.render('index', data);
  });
  
app.get('/dashboard', (req, res) => {
    const data = {
        title: 'Login Page',
        is_logged_in: true,
        username: 'Akshay'
      };      
    res.render('home', data);
  });


app.get('*', (req, res) => {
  res.send(' Custom 404 Page Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
