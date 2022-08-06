import { MongoClient } from "mongodb";

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
    }
}
