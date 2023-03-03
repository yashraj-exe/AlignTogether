const userModel = require("../model/register");

class User {
    static registerUser = async (req, res) => {
        const { username, email, password } = req.body;
        if (username && email && password) {
            const user = await userModel.findOne({ email: email });
            if (user) {
                res.send({ Status: "Failed", Message: "Email Allready Exist" });
            } else {
                try {
                    const newUserDoc = userModel({
                        id: Math.floor(Math.random() * 50000),
                        username,
                        email,
                        password
                    })

                    let saveResponse = await newUserDoc.save();
                    res.send({ Status: "Success ++", Message: "User Added Successfully", data: saveResponse })
                } catch (error) {
                    console.log(error)
                    res.send({ Status: "Failed", Message: "Something wrong with DataBase" });
                }
            }
        } else {
            res.send({ Status: "Failed", Message: "All fields are Required" });
        }
    }

    static loginUser = async (req, res) => {
        const { username, email, password } = req.body;
        const user = await userModel.find({ email });
        if (user.length === 1) {
            if (user[0].email === email && user[0].username === username && user[0].password === password) {
                res.send({ Status: "Success ++", Message: "Login Success" });
            } else {
                res.send({ Status: "Failed --", Message: "Email and Password is Incorrect" });
            }
        } else {
            res.send({ Status: "Failed --", Message: "Email and Password is Incorrect" });
        }
    }

    static updateStatus = async (req, res) => {
        const { user_id, status } = req.body;
        const user = await userModel.findOne({ _id: user_id });
        if (user !== undefined) {
            const response = await userModel.findByIdAndUpdate(user_id, { $set: { status: status } });
            res.send({ Status: "Success --", Message: "Successfully Update" });
        } else {
            res.send({ Status: "Failed --", Message: "Unable to update status" });
        }
    }

    static searching = async (req,res)=>{
        let limit = parseInt(req.query.limit) || 10;
        if(req.query.limit > 100){
            limit = 10;
        }
        let page = parseInt(req.query.page) || 0;
        let slice_from = (page === 0 ) ? 0 : page * limit;
        let slice_to = slice_from + limit;

    }
}

module.exports = User;