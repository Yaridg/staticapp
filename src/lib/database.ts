import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

const uri = process.env['MONGODB_URI'];

if ( !uri ) {
    throw new Error('Please add your Mongo URI to .env.local')
}

let client = new MongoClient(uri)

// Export database connection function that allows any database to be connected to 
export const db_connect = async (database: string) => {
    await client.connect();
    return client.db(database);
}
