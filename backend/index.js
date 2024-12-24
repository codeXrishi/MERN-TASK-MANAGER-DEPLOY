const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 5000;
const TaskRouter = require('./routes/TaskRoutes');
const bodyParser = require('body-parser');
const cors = require('cors')

app.get('/',(req,res)=>{
    res.send('Hello from the server');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks',TaskRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT = ${PORT}`);
})