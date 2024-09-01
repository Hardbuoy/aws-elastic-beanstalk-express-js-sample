const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hard Buoy Records Amalitech AWS Restart Portfolio Project Finally Wrapping up'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
