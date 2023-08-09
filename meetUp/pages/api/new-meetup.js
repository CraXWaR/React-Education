import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, addres, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://craxwar:bvvtqYY6DkyBVNkS@atlascluster.5pwkjes.mongodb.net/meetupsDb?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetupsDb");
    await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Added" });
  }
}

export default handler;
