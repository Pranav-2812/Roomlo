const express = require('express');
const router = express.Router();
const { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail} = require('firebase/auth');
const {doc, setDoc} = require('firebase/firestore');
const {firestoreDb, auth} = require("../index");

//signup
router.post("/create_new/user",async(req,res)=>{
    const {email, password, mob_no} = req.body;
    try {
        const existUser = await fetchSignInMethodsForEmail(auth, email);    
        if(existUser.length >0){
            return res.status(400).json({success:false,msg:"User Already Exists!"});
        }
        else{
            let credentials;
            try {
                credentials = await createUserWithEmailAndPassword(auth,email,password);
            } catch (error) {
                console.log(error.message);
            }
            const user = credentials.user;
            try {
                await setDoc(doc(firestoreDb,"Users", user.uid ),{
                    name:"",
                    email:email,
                    mobilenumber: mob_no,
                    password:password,
                    wpnumber:"",
                    address:"",
                    profileImageUrl:""
                }).then(()=>{return res.status(200).json({success:true,user})});
            } catch (error) {
                console.log(error.message)
            }
        }
    } catch (error) {
        console.log(error.message);
    }
})
//login
router.post("/login/user",async(req,res)=>{
    const{email, password} = req.body;
    try {
        const existUser = await fetchSignInMethodsForEmail(auth, email);    
        if(existUser.length == 0){
            return res.status(400).json({success:false,msg:"User does not exists!"});
        }
        else{
            let user;
            await signInWithEmailAndPassword(auth, email,password).then((credentials)=>{
                user = credentials.user;
                return res.status(200).json({success:true,user});
            });
        }
    } catch (error) {
        console.log(error.message);
    }
})
module.exports = router;