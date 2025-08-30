// import mongoose from "mongoose";

// const URI = process.env.MONGO_DB_URI || "mongodb://localhost:27017"
// const dbName = process.env.MONGO_DB || "swanna"

// async function Connect() {

//     try {

//         await mongoose.connect(URI, { dbName: dbName });

//     } catch (error) {

//         console.log("Err Connecting to Database");

//     }

// }

// export { Connect };

import { Connection, createConnection } from "mongoose";

import { Logger } from "@/utils/logger";

const URI = process.env.MONGO_DB_URI as string;

const connections: Record<string, Connection> = {};

const dbConnect = async (dbName: string): Promise<Connection> => {

    if (!dbName) { throw new Error("dbName is required for database connection.") }

    if (connections[dbName]) return connections[dbName];

    try {

        const connection = await createConnection(URI, { dbName }).asPromise();
        connections[dbName] = connection;

        Logger(`Connected to ${dbName}`);
        return connection;

    } catch (error) { throw new Error(`Failed to connect to ${dbName}`) }

}

export { dbConnect };