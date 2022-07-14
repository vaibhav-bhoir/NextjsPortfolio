import { MongoClient } from "mongodb";


export default async (req, res) => {

    const {name, email, message} = req.body;

    console.log(req.body);

    if (req.method === "POST") {


        const data = req.body;

        const client = await MongoClient.connect(process.env.MONGODB_URI);
        
        const db = client.db();
        const formData = db.collection("form-data");

        const result = await formData.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: "Data inserted successfully!" });
        }



























    // const transpoter = nodemailer.createTransport({
    //     host : 'gmail',
    //     post : 587,
    //     secure : false,
    //     auth : {
    //     user : process.env.user,
    //     pass : process.env.pass
    //     }
    // })

    // try {
    //     const emailRes = await transpoter.sendMail({
    //     from: email,
    //     to: 'techguytech100@gmail.com',
    //     subject: `Contact form submission from ${name}`,
    //     html: `<p>You have a new contact form submission</p><br>
    //     <p><strong>Name: </strong> ${name} </p><br>
    //     <p><strong>Message: </strong> ${message} </p><br>`,
    //     })

    //     console.log('Message Sent', emailRes.messageId);

    // } catch (error) {
    //     console.log(error);
        
    // }

    // res.status(200).json(req.body);
}
