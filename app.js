const express = require('express');

const app = express();

// TEMPLATE ENGINE
app.set("view engine","ejs");

// MIDDLEWARES
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index", {
        current_page:"index"
    });
});

app.get("/about", (req, res)=>{
    res.render("about", {
        current_page: "about"
    });
});



// END
const port = 3000;
app.listen(port, ()=>{
    console.log(`App started at: ${port}`);
});

