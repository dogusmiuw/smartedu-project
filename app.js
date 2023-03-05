const express = require('express');

const app = express();


app.get("/", (req,res)=>{
    res.send("<h1>index</h1>");
});


// END
const port = 3000;
app.listen(port, ()=>{
    console.log(`App started at: ${port}`);
});

