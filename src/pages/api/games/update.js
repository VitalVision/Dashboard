import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data)
        // Connect to MongoDB
        const db = await connectToDatabase();

        // Check if document already exists
        const existingDoc = await db.collection('games').findOne({ gameId: data.gameId });

        if (existingDoc) {
            // Update fields in existing document
            await db.collection('games').updateOne({ gameId: data.gameId }, { $set: { difficulty: data.difficulty, leftHand: data.toggleLeft, rightHand: data.toggleRight } });
        } else {
            // Insert new document
            await db.collection('games').insertOne(data);
        }

        res.status(201).json({ message: 'Data saved to MongoDB' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}