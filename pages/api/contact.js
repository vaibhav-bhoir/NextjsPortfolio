import { MongoClient } from "mongodb";
// import { createTransport } from "nodemailer";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req, res) => {

    if (req.method === "POST") {

        const data = req.body;

        const client = await MongoClient.connect(process.env.MONGODB_URI);
        
        const db = client.db();
        const formData = db.collection("form-data");

        const result = await formData.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: "Data inserted successfully!" });

        // nodemailer 
        // const name = req.body.name;
        // const email = req.body.email;
        // const message = req.body.message;

        // const transporter = createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.APP_EMAIL,
        //         pass: process.env.APP_PW
        //     },
        // });

        // const mailOptions = {
        //     from: {
        //         name: `${name}`,
        //         address: `${email}`
        //     },
        //     to: "Your email id",
        //     subject: "Contact Form Submission - Portfolio",
        //     html: `<p>Name: ${name}</p>
        //         <p>Email: ${email}</p>
        //         <p>Message: ${message}</p>`,
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });
    }
}
