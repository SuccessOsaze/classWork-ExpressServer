const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const quotes = require('./quotes.ts');


app.use(express.json());


// GET methods
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

app.get("/quotes/random", (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length + 1)];
    res.send(
    `
    <!DOCTYPE html>
    <html>
    <head><title>Quote</title></head>
    <body>
        <h1>${random.saint}${random.feastDay ? ", " + random.feastDay : ""}</h1>
        <p>${random.quote}</p>
    </body>
    </html>
    `
    );
})


// POST methods
    app.post("/birthday", (req, res) => {
    if (!req.body || !req.body.date) {
        return res.status(400).send("Send JSON like {\"date\": \"2026-11-05\"} with Content-Type: application/json");
    }

    const today = new Date();
    const birthday = new Date(req.body.date);
    const diffMs = birthday.getTime() - Date.now();
    const countDown = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
    if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate()) {
        res.send('<h1>HAPPY BIRTHDAY TO YOU!!!</h1>');
    } else {
        res.send(`you have ${countDown} days left`);
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})