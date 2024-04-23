const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const app = express();
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb+srv://raghu3:bU2Tw1o9D0JOUYv4@cluster0.yfvaety.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true});

const userSchema = {
	name: String,
    email: String, 
    password: String
};

// const User = mongoose.model("user", userSchema);

async function login(req, res) {
    const {email, password} = req.body;
    console.log(email, password);
    return res.json({status:"failure", message: "helo fom backend"})
}

async function signup(req, res) {
	const {email, password} = req.body;
    console.log(email, password);
    return res.json({status:"failure", message: "helo fom backend"})
    // const {name, email, password} = req.body;
    // console.log(name, email, password);

    // User.findOne({email: email}).then((foundUser) => {
	// 	if(!foundUser) {
	// 		const user = new User({
	// 			name: name,
	// 			email: email, 
    //             password: password
	// 		});
	// 		user.save();
	// 		return res.json({status: "success", message: "Helo from signup"});
	// 	}else {
	// 		return res.json({status: "failure", message: "Helo from signup"});
	// 	}
	// });
}

app.post("/login", login);

app.post("/signup", signup);

app.listen(3000, () => {
    console.log("hello");
})