const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error:  Unexpected token error in a callback function
//This might occur if a non-function is passed as a callback to listen()
//Example:

app.listen(port, "This is not a function"); //Throws an error
//Solution: Ensure you are passing a function to the app.listen method