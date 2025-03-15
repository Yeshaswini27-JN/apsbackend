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


// const express =require("express")
// const cors = require("cors")
// const app = express()
// const port = 3000

// app.use(cors())
// app.use(express.json())

// app.post("/login",(req,res)=>{
//     const username = req.body.username;
//     res.send("you have logged in successfully")
// })

// app.listen(port,()=>{
//     console.log("server started and listening on port 3000")
// })