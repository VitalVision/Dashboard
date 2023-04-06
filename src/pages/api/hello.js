import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
	const db = await connectToDatabase();

	console.log("connected to db");

	const collection = db.collection("messages");
	const messages = await collection.find().toArray();

	res.json({ messages });
}
