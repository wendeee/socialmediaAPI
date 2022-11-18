const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE_LOCAL;

mongoose
.connect(DB)
.then((connect) => {
    // console.log(connect.connections);
    console.log('Connection to DB successful!')
})



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) 