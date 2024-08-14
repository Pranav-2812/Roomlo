const express = require('express');
const cors = require('cors');
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env.local') });
const {initializeApp} = require('firebase/app');
const {getFirestore} = require("firebase/firestore");
const {getAuth} = require('firebase/auth')
const firebaseConfig = require('./db');
const port = 3000;
const app = express();
const firebase = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebase);
const auth = getAuth(firebase);
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello world! this time firebase");
})
// app.use("/auth",require("./Routes/auth"));

app.listen(port,()=>{
    console.log(`server started on http://127.0.0.1.${port}`);
})
module.exports = firestoreDb, auth;