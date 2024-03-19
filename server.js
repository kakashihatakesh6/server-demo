const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000 ;
// const port = 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.get('/', (req, res) => {
    res.json({message: "Hello from server!"});
});
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(PORT, () => {
    console.log(`Mark Attendance backend listening on port http://localhost:${PORT}`)
});

module.exports = app;



