const express = require('express');
var cors = require('cors');
const app = express();

const port = 3000;

app.use(express.json());
app.use(
    cors({
        origin: 'http://127.0.0.1:8080',
    })
);

const userRoutes = require('./routes/routes');
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
