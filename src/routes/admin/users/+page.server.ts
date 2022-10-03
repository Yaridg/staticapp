import { db_connect } from "$lib/database";
import { ObjectId } from "mongodb";
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { serializeMongoData } from "$lib/helpers/wrappers";

// define users
// interface Users {
//     _id: ObjectId,
//     firstname: string,
//     lastname: string,
//     username: string,
//     email: string,
//     status: string,
//     role: string
// }

// default load action
export const load: PageServerLoad = async ({ params }: any) => { 

    const db_client = await db_connect('vico_db'); // database to connect to
    const collection = db_client.collection('users'); // get the collection 
    const users = await collection.find().toArray(); // convert to array

    let results = await serializeMongoData(users);

    if (results) {
        return results;
    }

    throw error(404, 'Not found');
}

// User form actions 
export const actions: Actions = {
    addUser: async ( {request} : any ) => {
        const db_client = await db_connect('vico_db'); // database to connect to
        const collection = db_client.collection('users'); // get the collection 

        const values = await request.formData();

        const username: String = values.get('username');
        const firstname: String = values.get('firstname');
        const lastname: String = values.get('lastname');
        const email: String = values.get('email');
        const status: String = values.get('status');
        const role: String = values.get('role');

        const user = {
            'username': username,
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'status': status,
            'role': role
        }

        /* Todo :
            form data validation
        */
       
        // const user = await request.json();
        await collection.insertOne(user);

        return { success: true }
    },
    editUser: async ( {request} : any ) => {
        const db_client = await db_connect('vico_db'); // database to connect to
        const collection = db_client.collection('users'); // get the collection 

        // get form data from Edit User form
        const values = await request.formData();

        // assign to respective fields
        const _id: ObjectId = values.get('_id');
        const username: String = values.get('username');
        const firstname: String = values.get('firstname');
        const lastname: String = values.get('lastname');
        const email: String = values.get('email');
        const status: String = values.get('status');
        const role: String = values.get('role');

        /* Todo :
            form data validation
        */

        // set the updated records 
        const user = {
            'username': username,
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'status': status,
            'role': role
        }

        // mongo db update a document where ID is equal to the _id submitted from the form
        await collection.updateOne( 
            { _id: new ObjectId(_id) }, 
            {
                $set: user
            }
        );

        // return success 
        return { success: true }
    }
}


