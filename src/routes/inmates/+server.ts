import { db_connect } from "$lib/database";
import { ObjectId } from "mongodb";
import { json } from "@sveltejs/kit"

export const POST = async ( {request} : any ) => {
    try {
        const collectionName = await request.json();

        const db_client = await db_connect('vico_db'); // database to connect to

        const data = await db_client.collection(collectionName).find().toArray(); // get the collection 

        return json(data);
    } catch (error) {
        return {
            status: 500,
            body: {
                error: 'A server error occured!'
            }
        }
    }
}