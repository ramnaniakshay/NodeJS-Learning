const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

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


app.get('*', (req, res) => {
  res.send(' Custom 404 Page Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
