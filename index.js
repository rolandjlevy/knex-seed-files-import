const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
