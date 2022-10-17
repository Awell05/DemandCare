const express = require('express');

const PORT = 5221;
const app = express();

app.get('/', (req, res) => {
    res.send("<h1> This is your site!</h1>");
});

app.get("/:about", (req, res) => {
    console.log(req.params.about);
})


// use req.params to target user inputs (:)
// ? in express query req.query ?key=value of the object

app.listen(PORT, () => 
console.log(`site loading at http://localhost:${PORT}`)
);