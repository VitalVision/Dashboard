import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
	client = new MongoClient(uri, options);
}

export async function connectToDatabase() {
	if (!client) {
		client = new MongoClient(uri, options);

		clientPromise = client.connect();
	}

	await clientPromise;

	return client.db();
}
