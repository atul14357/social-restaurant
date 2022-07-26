const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
//const formConnect = require("./formDb");
//const UserModel = require("./models/formUser");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { Mongoose } = require("mongoose");

// database connection
connection();
//formConnect();




// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
//app.set("view engine","ejs")

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// app.get("/home",(req,res)=>{
//     res.render("index");
// })

// app.post("/api/user",(req,res)=>{
//     const SaveUser = new UserModel(req.body)
//     SaveUser.save((error,savedUser)=>{
//         if(error) throw error
//         res.json(savedUser)
//     })
// })

const port = process.env.PORT || 8080;
app.listen(port,()=> console.log(`Listening on port ${port}...`));
