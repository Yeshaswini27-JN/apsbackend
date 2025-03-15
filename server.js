const cors = require("cors")
const express = require("express"); 
const app = express(); 
const fs = require("fs"); 

app.use(express.json());
app.use(cors())
app.post("/login", (req, res) => { 
    const username = req.body.username; 
    res.send("success")

}); 

app.listen(3000, () => { 
    console.log("Server started on port 3000"); 
});


