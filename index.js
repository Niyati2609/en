const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors())
app.use(express.json())


let sendEmail = async(name,phone,query) =>
{
let transporter = nodemailer.createTransport({
service: "gmail",
auth : {
user : "2021.niyati.gaonkar@ves.ac.in",
pass : "dhkeqhlgnttsjjdd"
}
});

let mailOptions = {
from : "2021.niyati.gaonkar@ves.ac.in",
to : "2021.niyati.gaonkar@ves.ac.in",
subject : "Enquiry Form " + name ,
text : phone + " " + query
}

await transporter.sendMail(mailOptions);
}


app.post("/save", async(req,res) => {
const name = req.body.name;
const phone = req.body.phone;
const query = req.body.query;
console.log(name ,phone, query);
await sendEmail(name,phone,query);
res.send("success");
})

app.listen(9000 , ()=> { console.log("ready at 9000 ")} )