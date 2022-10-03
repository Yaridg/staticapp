import { db_connect } from "$lib/database";
import { ObjectId } from "mongodb";
import { json } from "@sveltejs/kit"

export const DELETE = async ( {request} : any ) => {
    try {
        const db_client = await db_connect('vico_db'); // database to connect to
        const collection = db_client.collection('users'); // get the collection 

        const user = await request.json();

        await collection.deleteOne( {"_id": new ObjectId(user._id)} );

        return json('success')
    } catch (error) {
        return {
            status: 500,
            body: {
                error: 'A server error occured!'
            }
        }
    }
}

// export const GET = async () => {
//     const db_client = await db_connect('vico_db'); // database to connect to
//     const collection = db_client.collection('users'); // get the collection 
//     const users = await collection.find().toArray(); // convert to array

//     //const users = await db.collection('users').find().toArray()

//     return {
//         status: 200,
//         body: { users }
//     }
    
// } 

// export const GET_BY_ID = async ( {request} : any ) => {
//     try {
//         const db_client = await db_connect('vico_db'); // database to connect to
//         const collection = db_client.collection('users'); // get the collection 

//         const user = await request.json();

//         const returned_user = collection.find( {"_id": new ObjectId(user._id)} );

//         return {
//             status: 200,
//             body: {
//                 user
//             }
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             body: {
//                 error: 'A server error occured!'
//             }
//         }
//     }
// }

// export const POST = async ( {request} : any ) => {
//     try {
//         const db_client = await db_connect('vico_db'); // database to connect to
//         const collection = db_client.collection('users'); // get the collection 

//         const user = await request.json();
//         await collection.insertOne(user);

//         return {
//             status: 200,
//             body: {
//                 status: 'Success'
//             }
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             body: {
//                 error: 'A server error occured!'
//             }
//         }
//     }
// }

// export const DELETE = async ( {request} : any ) => {
//     try {
//         const db_client = await db_connect('vico_db'); // database to connect to
//         const collection = db_client.collection('users'); // get the collection 

//         const user = await request.json();

//         await collection.deleteOne( {"_id": new ObjectId(user._id)} );

//         return {
//             status: 200,
//             body: {
//                 status: 'Success'
//             }
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             body: {
//                 error: 'A server error occured!'
//             }
//         }
//     }
// }

// export const PUT = async () => {}