
const express = require('express');
const app = express();
const port = process.env.PORT || 4005;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
})