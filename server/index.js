const express= require('express');
const app= express();
const cors= require('cors');
const pool= require('./db');

//middleware
app.use(cors());
//routes
// create a todo
//get all todos
//get a todo
// update a todo
//delete a todo
app.use(express.json());

app.listen(5000,()=>{
    console.log('Server is running on port 5000.')
})