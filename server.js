const express = require('express');

const PORT = process.env.PORT || 5221;
const app = express();

// used to send data to the front end or send data 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// allows us to reference files with their relative.path
// links all public files to the domain
app.use(express.static('public'));

app.get('/', (req, res) => {
    // path.join(__dirname "/public/")
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
