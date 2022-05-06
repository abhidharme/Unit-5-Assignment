const express = require("express");

const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    max: 10,
    windowMs: 60 * 1000,
    message: "Too many request Please try after 1 minute"
});

app.use(limiter);


app.get("/", (req, res) => {
    res.status(200).json({
        status: "successful",
        message: "you have made request success"
    });
});

const port = 4001;
app.listen(port, () => {
    console.log(`api is running 4001 poort${port}`);
});