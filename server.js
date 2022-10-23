const express = require('express');
const sequelize = require('./config/connection');
const connectors = require('./connectors');

const PORT = process.env.PORT || 3030;
const app = express();

// used to send data to the front end or send data 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// allows us to reference files with their relative.path
// links all public files to the domain
app.use(express.static('public'));

app.use(connectors);

sequelize.sync({ force: true }).then(() => {app.listen(PORT, () => 
console.log(`site loading at http://localhost:${PORT}`)
);
});
