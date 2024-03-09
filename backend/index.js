const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3000;

// Define a route handler for the root URL
app.get('/', (req, res) => {
    console.log("HELLO WORLD!@@#@$@#$@")
    res.json({
        msg: Math.random()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
