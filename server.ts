const express = require('express');
const app = express();
const PORT = 2000;

app.get('/', (req, res) => {
    res.send('<h1> Welcome to my first express server!</h1>');
});

app.get('/login', (req, res) => {
    res.send('<h1> Here\'s the login page</h1>');
});

app.get("/login/status",(req, res) => {
    res.send('<h1> The login was successful</h1>');
});

app.get("/view_msgs", (req, res) => {
    res.send('<h1> Here\'s your messages </h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})